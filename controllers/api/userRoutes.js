const router = require('express').Router();
const { User } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Adding a get-login route to display the login form page when the user
// clicks the login button on any of the common pages.
router.get('/login', async (req, res) => {

  // XXXXXX
  // Should test whether already logged in....

  res.render("login",{
    layout: "main",
    loggedIn: req.session.logged_in === true
  });

});

// Adding a signup route to display the signup form page....
router.get('/signup', async (req, res) => {

  // XXXXXX
  // Should test whether already logged in....

  res.render("signup",{
    layout: "main",
    loggedIn: req.session.logged_in === true
  });

});



router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// API TESTING ROUTE - uncomment line below and comment above if testing backend only

// router.get('/', async (req, res) => {
//   try {
//     const userData = await User.findAll({});
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

module.exports = router;

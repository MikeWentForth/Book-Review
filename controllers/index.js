const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  res.render("index", {
    layout: "main",
    loggedIn: req.session.logged_in === true
  });

  //res.send('Placeholder route.');
  // i think this line should go in the homeRoutes.js and then we can figure out how the homeRoutes page should render
  // will leave as is per testing API right now
});

module.exports = router;

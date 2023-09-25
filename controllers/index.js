const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("index",{
        layout: "main",
        loggedIn: req.session.logged_in === true
    });
    //res.send('Placeholder route.');
});

module.exports = router;

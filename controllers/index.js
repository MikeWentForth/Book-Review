const router = require('express').Router();

router.get('/', (req, res) => {
    res.render("index",{layout: "main"});
    //res.send('Placeholder route.');
});

module.exports = router;

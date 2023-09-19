const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Placeholder route.');
});

module.exports = router;

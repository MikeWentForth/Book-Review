const router = require('express').Router();
const { Review, User } = require('../models');
const asyncHandler = require('express-async-handler');

router.get('/', asyncHandler(async (req, res) => {
    const reviewsData = await Review.findAll({
        include: [{
            model: User,
            attributes: ['name'],
        }],
    });
    const reviews = reviewsData.map((reviews) => reviews.get({ plain: true }));
    res.render('main', { reviews: reviewsData });
}));

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/main');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
});


module.exports = router;
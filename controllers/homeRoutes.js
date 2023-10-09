const router = require('express').Router();
const { Review, User } = require('../models');
const asyncHandler = require('express-async-handler');
const withAuth = require('../utils/auth');


// main homepage where all user reviews are shown
// async handler used here
router.get('/', asyncHandler(async (req, res) => {
    const reviewsData = await Review.findAll({
        include: [{
            model: User,
            attributes: ['name'],
        }],
    });
    const reviews = reviewsData.map((reviews) => reviews.get({ plain: true }));
    res.render('homepage',
        { reviews, loggedIn: req.session.loggedIn, });

}));

// route access to main handlebar
// main page for users
router.get('/main', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Review }],
        });

        const user = userData.get({ plain: true });

        res.render('userHome', {
            ...user,
            loggedIn: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
        res.redirect('/main');
        return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
});

//render each review
router.get('/review/:id', async (req, res) => {
    try {
        const reviewData = await Review.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const review = reviewData.get({ plain: true });

        res.render('review', {
            ...review,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
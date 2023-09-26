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
    res.render('homepage', { reviews: reviewsData });
}));

module.exports = router;
const router = require('express').Router();
const { Review, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const reviewsData = await Review.findAll({
            include: [{
                model: User,
                attributes: ['name'],
            },],
        });
        const reviews = reviewsData.map((reviews) => reviews.get({ plain: true }));
        res.render('homepage', { reviews: reviewsData });
    } catch (err) {
        res.status(500).json(err);
    }
});

//if homepage will consist of user reviews right away, please uncomment
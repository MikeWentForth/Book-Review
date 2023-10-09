const router = require('express').Router();
const userRoutes = require('./userRoutes');
const userReviewRoutes = require('./userReviews');
const userBookRoutes = require('./userBooks');

router.use('/users', userRoutes);
router.use('/user-reviews', userReviewRoutes);
router.use('/user-books', userBookRoutes);

module.exports = router;

// make sure to uncomment when review routes and models have been created

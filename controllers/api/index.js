const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const reviewRoutes = require('./reviewRoutes')'
// Routes
router.use('/users', userRoutes);
// router.use('/user-reviews, reviewRoutes)

module.exports = router;

// make sure to uncomment when review routes and models have been created

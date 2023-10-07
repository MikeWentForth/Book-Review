const router = require('express').Router();
const { Review, Book } = require('../../models');
const withAuth = require('../../utils/auth');
const asyncHandler = require('express-async-handler');

router.get('/', withAuth, asyncHandler(async (req, res) => {
    // Fetch all books associated with the user
    const booksData = await Book.findAll({
        where: { user_id: req.session.user_id },
    });
    const books = booksData.map((book) => book.get({ plain: true }));

    // Fetch all reviews associated with the user's books
    const reviewsData = await Review.findAll({
        where: { book_id: booksData.map((book) => book.id) },
    });
    const reviews = reviewsData.map((review) => review.get({ plain: true }));

    res.render('userHome', { books, reviews });
}));

router.post('/', withAuth, async (req, res) => {
    try {
        const booksData = await Book.create({
            ...req.body,
            user_id: req.session.user_id, // uncomment for testing
        });

        res.status(200).json(booksData);
    } catch (err) {
        res.status(400).json(err);
    }
});



// API TESTING ROUTE - uncomment line below and comment above if testing backend only

// router.get('/', /*withAuth,*/ asyncHandler(async (req, res) => {
//     // Fetch all books associated with the user
//     const booksData = await Book.findAll({
//         where: { user_id: req.session.user_id },
//     });
//     const books = booksData.map((book) => book.get({ plain: true }));

//     // Fetch all reviews associated with the user's books
//     const reviewsData = await Review.findAll({
//         where: { book_id: booksData.map((book) => book.id) },
//     });
//     const reviews = reviewsData.map((review) => review.get({ plain: true }));
//     res.status(200).json(booksData);
// }));

module.exports = router;

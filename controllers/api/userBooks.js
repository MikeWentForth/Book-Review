const router = require('express').Router();
const { Review, Book } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
    try {
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

        res.render('profile', { books, reviews });
    } catch (err) {
        res.status(500).json(err);
    }
});


// API TESTING ROUTE - uncomment line below and comment above if testing backend only

// router.get('/', /*withAuth,*/ async (req, res) => {
//     try {
//         const booksData = await Book.findAll({
//             include: [{ model: User }],
//         });

//         // Instead of rendering a view, send the data as JSON
//         res.status(200).json(booksData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });



module.exports = router;
const router = require('express').Router();
const { User, Book } = require('../../models');

// router.get('/', /*withAuth,*/ async (req, res) => {
//     try {
//         const reviewsData = await Book.findAll({
//             where: { user_id: req.session.user_id },
//         });
//         const books = booksData.map((books) => books.get({ plain: true }));
//         res.render('profile', { books: reviewsData });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// API TESTING ROUTE - uncomment line below and comment above if testing backend only

router.get('/', /*withAuth,*/ async (req, res) => {
    try {
        const booksData = await Book.findAll({
            include: [{ model: User }],
        });

        // Instead of rendering a view, send the data as JSON
        res.status(200).json(booksData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
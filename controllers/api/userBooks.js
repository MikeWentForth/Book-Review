const router = require('express').Router();
const { Book } = require('../../models');

router.get('/', /*withAuth,*/ async (req, res) => {
    try {
        const reviewsData = await Book.findAll({
            where: { user_id: req.session.user_id },
        });
        const books = booksData.map((books) => books.get({ plain: true }));
        res.render('profile', { books: reviewsData });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
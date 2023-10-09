const router = require('express').Router();
const { User, Book } = require('../../models');
const withAuth = require('../../utils/auth');
const asyncHandler = require('express-async-handler');


//temp holder
const newBookOBJ = {id: '', title: '', author: '', desc: '',coverIMG: '', genre: '', pubDate: '', isbn: '',}

//Creates book entry in DB
router.post('/', withAuth, async (req, res) => {
    try {
        const bookData = await Book.create({
            title: newBookOBJ.title,
            author: newBookOBJ.author,
            genre: newBookOBJ.genre,
            publish_date: newBookOBJ.pubDate,
            user_id: req.session.user_id,
        });

        res.status(200).json(bookData);
    } catch (err) {
        res.status(400).json(err);
    }
});


// Deletes book data
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const bookData = await Review.destroy({
            where: {
                id: newBookOBJ.id,
                user_id: req.session.user_id,
            },
        });
        if (!bookData) {
            res.status(404).json({ message: 'No book found with this id!' });
            return;
        }

        res.status(200).json(bookData);
    } catch (err) {
        res.status(500).json(err);
    }
});
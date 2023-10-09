const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');


// post method
router.post('/', withAuth, async (req, res) => {
    try {
        const reviewsData = await Review.create({
            ...req.body,
            user_id: req.session.user_id, // uncomment for testing
        });

        res.status(200).json(reviewsData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Put method to edit/update their review
router.put('/:id', withAuth, async (req, res) => {
    try {
        const reviewsData = await Review.findByPk(req.params.id);
        if (!reviewsData) {
            return res.status(404).json({ message: 'No review found with provided ID' })
        }
        await Review.update(req.body, {
            where: {
                review_id: req.params.id
            }
        });
        res.status(200).json(reviewsData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' })
    }
});


// Delete Method
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const reviewsData = await Review.destroy({
            where: {
                review_id: req.params.id,
                user_id: req.session.user_id, // uncomment for testing
            },
        });
        if (!reviewsData) {
            res.status(404).json({ message: 'No review found with this id!' });
            return;
        }

        res.status(200).json(reviewsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// API TESTING ROUTE - uncomment line below and comment above if testing backend only

// router.get('/', /*withAuth,*/ async (req, res) => {
//     try {
//         const reviewsData = await Review.findAll({
//             include: [{
//                 model: User,
//                 attributes: ['name'],
//             },],
//         });

//         // Instead of rendering a view, send the data as JSON
//         res.status(200).json(reviewsData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
module.exports = router;
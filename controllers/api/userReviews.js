const router = require('express').Router();
const { User, Review } = require('../../models');


//uncomment if we are showing the user reviews in the user UI
// GET all user reviews *if feature is approved
// router.get('/', /*withAuth,*/ async (req, res) => {
//     try {
//         const reviewsData = await Review.findAll({
//             include: [{
//                 model: User,
//                 attributes: ['name'],
//             },],
//         });
//         const reviews = reviewsData.map((reviews) => reviews.get({ plain: true }));
//         res.render('homepage', { reviews: reviewsData });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// // // GET a single review *if feature is approved
// router.get('/:id', /*withAuth,*/ async (req, res) => {
//     try {
//         const reviewsData = await Review.findByPk(req.params.id, {
//             // JOIN with locations, using the Trip through table
//             include: [{ model: Review }]
//         });

//         if (!reviewsData) {
//             res.status(404).json({ message: 'No traveller found with this id!' });
//             return;
//         }

//         res.status(200).json(reviewsData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// // post method
// router.post('/',/*withAuth,*/ async (req, res) => {
//     try {
//         const newProject = await Review.create({
//             ...req.body,
//             user_id: req.session.user_id,
//         });

//         res.status(200).json(newProject);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// // Delete Method
// router.delete('/:id',/*withAuth,*/ async (req, res) => {
//     try {
//         const reviewData = await Review.destroy({
//             where: {
//                 id: req.params.id,
//                 user_id: req.session.user_id,
//             },
//         });
//         if (!projectData) {
//             res.status(404).json({ message: 'No project found with this id!' });
//             return;
//         }

//         res.status(200).json(projectData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// API TESTING ROUTE - uncomment line below and comment above if testing backend only

router.get('/', /*withAuth,*/ async (req, res) => {
    try {
        const reviewsData = await Review.findAll({
            include: [{
                model: User,
                attributes: ['name'],
            },],
        });

        // Instead of rendering a view, send the data as JSON
        res.status(200).json(reviewsData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
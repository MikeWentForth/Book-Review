const router = require('express').Router();
//const { User, Reviews } = require('../../models'); uncomment once Models have been created


//uncomment if we are showing the user reviews in the user UI
// GET all user reviews *if feature is approved
// router.get('/', async (req, res) => {
//   try {
//       const reviewsData = await Reviews.findAll({
//           include: [{
//               model: User,
//               attributes: ['name'],
//           },],
//       });
//       const reviews = reviewsData.map((reviews) => reviews.get({ plain: true }));
//       res.render('homepage', { reviews: reviewsData });
//   } catch (err) {
//       res.status(500).json(err);
//   }
//

// // GET a single review *if feature is approved
// router.get('/:id', async (req, res) => {
//     try {
//         const reviewsData = await Reviews.findByPk(req.params.id, {
//             // JOIN with locations, using the Trip through table
//             include: [{ model: Reviews }]
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

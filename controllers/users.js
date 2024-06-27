const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try {
        // Look up the user from req.session
        const allUsers = await User.find({});
        // Render index.ejs, passing in all of the current user's 
        // foods as data in the context object. 
        res.render('users/index.ejs', {
            users: allUsers,
        });
    } catch (error) {
        // If any errors, log them and redirect back home
        console.log(error)
        res.redirect('/')
    }
});

router.get('/:userId/menu', async (req, res) => {
    try {
        // Look up the user from req.session
        const userInDatabase = await User.findById(req.params.userId);
        console.log(userInDatabase);
        // Render index.ejs, passing in all of the current user's 
        // Find the food by the foodId supplied from req.params
        // foods as data in the context object. 
        res.render('users/menu.ejs', {
            user: userInDatabase,
        });
    } catch (error) {
        // If any errors, log them and redirect back home
        console.log(error)
        res.redirect('/users')
    }
});

// router.get('/:foodId', async (req, res) => {
//     try {
//         // Look up the user from req.session
//         const currentUser = await User.findById(req.session.user._id);
//         // Find the food by the foodId supplied from req.params
//         const food = currentUser.pantry.id(req.params.foodId);
//         // Render the show view, passing the food data in the context object
//         res.render('foods/show.ejs', {
//             food: food,
//         });
//     } catch (error) {
//         // If any errors, log them and redirect back home
//         console.log(error);
//         res.redirect('/')
//     }
// });

module.exports = router;
const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

router.get('/', async (req, res) => {
    try {
        const allUsers = await User.find({});
        res.render('users/index.ejs', {
            users: allUsers,
        });
    } catch (error) {
        console.log(error)
        res.redirect('/')
    }
});

router.get('/:userId/menu', async (req, res) => {
    try {
        const userInDatabase = await User.findById(req.params.userId);
        res.render('users/menu.ejs', {
            user: userInDatabase,
        });
    } catch (error) {
        console.log(error)
        res.redirect('/users')
    }
});

module.exports = router;
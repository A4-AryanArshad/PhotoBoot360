const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Admin = require('../models/Admin');

// POST request to create a new user
router.post('/', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, eventDate, eventTime, eventLocation } = req.body;

    try {
        const newUser = new User({
            firstName,
            lastName,
            email,
            phoneNumber,
            eventDate,
            eventTime,
            eventLocation,
        });

        await newUser.save();
        res.status(201).json({ message: 'User details saved successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving user details', error: err.message });
    }
});

// POST request for admin login
router.post('/login', async (req, res) => {
    const { name, email } = req.body;

    try {
        const admin = await Admin.findOne({ name, email });

        if (admin) {
            res.status(200).json({ message: 'Login successful', admin });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// GET request to fetch all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
});

// DELETE request to delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
});
router.post('/admins', async (req, res) => {
    const { name, email } = req.body;

    try {
        const newAdmin = new Admin({
            name,
            email,
        });

        await newAdmin.save();
        res.status(201).json({ message: 'Admin added successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding admin', error: err.message });
    }
});

// GET request to fetch all admins
router.get('/admins', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching admins', error: err.message });
    }
});

// DELETE request to delete an admin by ID
router.delete('/admins/:id', async (req, res) => {
    try {
        const adminId = req.params.id;
        await Admin.findByIdAndDelete(adminId);
        res.status(200).json({ message: 'Admin deleted successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting admin', error: err.message });
    }
});

module.exports = router;

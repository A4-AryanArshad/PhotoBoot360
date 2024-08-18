const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// GET request to fetch all admins
router.get('/', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching admins', error: err.message });
    }
});

// POST request to create a new admin
router.post('/', async (req, res) => {
    const { name, email } = req.body;

    try {
        const newAdmin = new Admin({ name, email });
        await newAdmin.save();
        res.status(201).json(newAdmin);
    } catch (err) {
        res.status(500).json({ message: 'Error creating admin', error: err.message });
    }
});

// DELETE request to delete an admin by ID
router.delete('/:id', async (req, res) => {
    try {
        const adminId = req.params.id;
        await Admin.findByIdAndDelete(adminId);
        res.status(200).json({ message: 'Admin deleted successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting admin', error: err.message });
    }
});

module.exports = router;

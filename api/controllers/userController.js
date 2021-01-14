const User = require('../models/User');

exports.getLoggedUser = async (req, res) => {
    res.status(200).json(req.user);
};

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    return res.status(200).json(users);
};
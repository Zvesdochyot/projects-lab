const User = require('../models/User');

exports.getLoggedUser = (req, res) => {
    res.send('Logged User!');
};

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.send(users);
};
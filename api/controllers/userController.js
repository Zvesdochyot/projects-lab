const User = require('../models/User');
const {
    HTTP_OK
} = require('../constants/httpCodes');

exports.getLoggedUser = async (req, res) => {
    console.log(req);
    res.status(HTTP_OK).json(req.user);
};

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.send(users);
};
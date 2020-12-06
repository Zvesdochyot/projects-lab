const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt.config');
const User = require('../models/User');
const {
    HTTP_BAD_REQUEST,
    HTTP_NOT_FOUND,
    HTTP_NO_CONTENT
} = require('../constants/httpCodes');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email }});

    if (!user) {
        res.status(HTTP_NOT_FOUND).send('User with such email not found!');
        return;
    }

    const passwordsMatch = await bcrypt.compare(req.body.password, user.password);

    if (!passwordsMatch) {
        res.status(HTTP_BAD_REQUEST).json('Wrong password!');
        return;
    }

    const token = jwt.sign(
        { user },
        JWT_SECRET,
        { expiresIn: 60 * 60 * 24 });

    res.json({
        accessToken: token
    });
};

exports.register = async (req, res) => {
    let user = await User.findOne({ where: { email: req.body.email }});

    if (user) {
        res.status(HTTP_BAD_REQUEST).json('User with such email already exists!');
        return;
    }

    user = await User.findOne({ where: { nickname: req.body.nickname }});

    if (user) {
        res.status(HTTP_BAD_REQUEST).json('User with such nickname already exists!');
        return;
    }

    if (req.body.password !== req.body.password_confirmation) {
        res.status(HTTP_BAD_REQUEST).json("Passwords don't match!");
        return;
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    user = User.build({
        name: req.body.name,
        email: req.body.email,
        nickname: req.body.nickname,
        password: hashedPassword,
        createdAt: Date.now(),
        updatedAt: null
    });
    await user.save();

    res.status(200).json('You successfully registered!');
};

exports.logout = async (req, res) => {
    req.user = null;
    res.status(HTTP_NO_CONTENT).json('Logged out!');
};
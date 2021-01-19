const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const mailer = require('../../mail/mailer');
const createError = require('http-errors');

exports.login = async (req, res, next) => {
    const user = await User.findOne({ where: { email: req.body.email }});

    if (!user) {
        return next(createError(404, 'User with such email not found!'));
    }

    const passwordsMatch = await bcrypt.compare(req.body.password, user.password);

    if (!passwordsMatch) {
        return next(createError(400, 'Wrong password!'));
    }

    const token = jwt.sign(
        { user },
        process.env.JWT_SECRET,
        { expiresIn: 3600 });

    res.status(200).json({
        accessToken: token
    });
};

exports.register = async (req, res, next) => {
    let user = await User.findOne({ where: { email: req.body.email }});

    if (user) {
        return next(createError(400, 'User with such email already exists!'));
    }

    user = await User.findOne({ where: { nickname: req.body.nickname }});

    if (user) {
        return next(createError(400, 'User with such nickname already exists!'));
    }

    if (req.body.password !== req.body.password_confirmation) {
        return next(createError(400, "Passwords don't match!"));
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

    mailer.sendRegisterMail(req.body.name, req.body.email);

    return res.status(200).json('You successfully registered!');
};

exports.logout = async (req, res) => {
    req.user = null;
    res.status(204).json('Logged out!');
};
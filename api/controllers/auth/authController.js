const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email }});

    if (!user) {
        res.status(404).send('User with such email not found!');
        return;
    }

    const passwordsMatch = await bcrypt.compare(req.body.password, user.password);

    if (!passwordsMatch) {
        res.status(400).json('Wrong password!');
        return;
    }

    const token = jwt.sign(
        { user },
        process.env.JWT_SECRET,
        { expiresIn: 3600 });

    res.status(200).json({
        accessToken: token
    });
};

exports.register = async (req, res) => {
    let user = await User.findOne({ where: { email: req.body.email }});

    if (user) {
        return res.status(400).json('User with such email already exists!');
    }

    user = await User.findOne({ where: { nickname: req.body.nickname }});

    if (user) {
        return res.status(400).json('User with such nickname already exists!');
    }

    if (req.body.password !== req.body.password_confirmation) {
        return res.status(400).json("Passwords don't match!");
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

    return res.status(200).json('You successfully registered!');
};

exports.logout = async (req, res) => {
    req.user = null;
    res.status(204).json('Logged out!');
};
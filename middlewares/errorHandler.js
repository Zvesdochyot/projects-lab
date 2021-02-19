module.exports = (error, req, res, next) => {
    res.status(error.status).json({ success: false, message: error.message });
};
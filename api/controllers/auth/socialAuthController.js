exports.redirectToProvider = (req, res) => {
    res.status(200).json(req.params.provider);
};
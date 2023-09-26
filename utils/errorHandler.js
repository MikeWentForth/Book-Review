module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error! Unable to process your request at this time' });
};
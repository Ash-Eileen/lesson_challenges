const { getAllComments } = require('../utils/comments_utilities');

const getComments = function (req, res) {
  getAllComments(req).exec((err, comments) => {
        if (err) {
            res.status(500);
            return res.json({
                error: err.message
            });
        }
        res.json(comments);
    });
};


module.exports = {
  getComments
};
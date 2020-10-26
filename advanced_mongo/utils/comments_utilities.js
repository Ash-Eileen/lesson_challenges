const Comment = require('../models/comment')
const fetch = require("node-fetch")

const getAllComments = function (req) {
  return Comment.find()
}

module.exports = { getAllComments }

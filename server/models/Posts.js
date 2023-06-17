const { Schema, model } = require('mongoose');

const postsSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Categories',
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    get: (date) => new Date(date).toLocaleDateString(),
  },
});

const Posts = model('Posts', postsSchema);

module.exports = Posts;
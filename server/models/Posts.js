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
    required: true,
    ref: 'Categories',
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    get: (date) => new Date(date).toLocaleDateString(),
  },
  image: {
    type: String,
  },
});

const Posts = model('Posts', postsSchema);

module.exports = Posts;
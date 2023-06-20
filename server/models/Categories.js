const { Schema, model, Types } = require('mongoose');
// const bcrypt = require('bcrypt');

const Categorieschema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true,
 
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Posts',
  }
 
});

const Categories = model('Categories', Categorieschema);

module.exports = Categories;

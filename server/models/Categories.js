const { Schema, model, Types } = require('mongoose');
// const bcrypt = require('bcrypt');

const categoriesSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true,
 
  }
 
});

const Categories = model('Categories', categoriesSchema);

module.exports = Categories;

const { Schema, model, Types } = require('mongoose');
// const bcrypt = require('bcrypt');

const categoriesSchema = new Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId()
  // },

  title: {
    type: String,
    required: true,
    unique: true,
 
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
    get: (date) => new Date(date).toLocaleDateString(),
  }
  }, {
    toJSON: {
      getters: true
    },
});

const Categories = model('Categories', categoriesSchema);

module.exports = Categories;

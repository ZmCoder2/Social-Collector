const { Schema, model } = require('mongoose');


const likesSchema = new Schema({
    usersId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
      },
      postsId: {
        type: Schema.Types.ObjectId,
        ref: 'Posts',
        required: true,
      }
});


const Likes = model('Likes', likesSchema);

module.exports = Likes;
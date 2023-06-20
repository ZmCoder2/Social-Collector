const { Schema, model } = require('mongoose');


const likesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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
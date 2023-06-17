const { Schema, model } = require('mongoose');


const followersSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
});


const Followers = model('Followers', followersSchema);

module.exports = Followers;
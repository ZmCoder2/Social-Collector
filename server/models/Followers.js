const { Schema, model } = require('mongoose');


const followersSchema = new Schema({
    usersId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true,
      },
});


const Followers = model('Followers', followersSchema);

module.exports = Followers;
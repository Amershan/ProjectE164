/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    email: {
      type: 'email',
      unique: true
    },
    phoneNumber: {
      type: 'string',
    },
    name:  {
      type: 'string'
    },
    role:  {
      type: 'string'
    },

    toJSON: function() {
      var obj = this.toObject();
      return obj;
    }
  },

  //beforeCreate: function(user, cb) {
  //  bcrypt.genSalt(10, function(err, salt) {
  //    bcrypt.hash(user.password, salt, function(err, hash) {
  //      if (err) {
  //        console.log(err);
  //        cb(err);
  //      } else {
  //        user.password = hash;
  //        cb();
  //      }
  //    });
  //  });
  //}
};


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

let UserSchema = new Schema({
    user_name: {
        type: String,
        unique: true,
        required: true
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
        if(err){
            return next(err);
        }
        user.password=hash;
        next();
    })
})

UserSchema.statics.authenticate = function (user_name, password, callback) {
    User.findOne({ user_name: user_name })
      .exec(function (err, user) {
        if (err) {
          console.log('Error: Unknown error when trying to find user: ' + err);
          return callback(err)
        } else if (!user) {
          console.log('Error: User not found');
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            console.log(result);
            console.log("password match");
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
  }
var User = mongoose.model('User', UserSchema);
module.exports = User;
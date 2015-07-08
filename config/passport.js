/**
 * Created by die on 2015.07.07..
 */
var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  bcrypt = require('bcrypt');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ id: id } , function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({
    usernameField: 'login',
    passwordField: 'password'
  },
  function(login, password, done) {

    User.findOne({or: [{ email: login }, {phoneNumber: login}]}, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }

        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(login, salt, function (err, hash) {
            if (err) {
              console.log(err);
              cb(err);
            } else {
              user.password = hash;
              bcrypt.compare(password, user.password, function (err, res) {
                if (!res)
                  return done(null, false, {
                    message: 'Invalid Password'
                  });
                sails.config.globals.user = user;
                return done(null, user, {
                  message: 'Logged In Successfully'
                });
              });
            }
          });
        });

    });
  }
));

/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
  _config: {
    actions: false,
  },

  login: function(req, res) {

    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        return res.send({
          message: info.message,
          user: user
        });
      }
      req.logIn(user, function(err) {
        sails.log.debug("Error in auth:");
        sails.log.debug(err);

        if (err) res.send(err);
        sails.config.views.layout ='layout2';


        return res.redirect('/user/find');
      });

    })(req, res);
  },

  logout: function(req, res) {
    req.logout();
    sails.config.views.layout ='layout';
    res.redirect('/');
  }
};


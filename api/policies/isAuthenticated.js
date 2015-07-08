/**
 * Created by die on 2015.07.07..
 */
module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else{
    return res.redirect('/login');
  }
};

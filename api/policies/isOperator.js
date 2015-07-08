/**
 * Created by die on 2015.07.08..
 */
module.exports = function(req, res, next) {
  sails.log.debug(req.user);
  if (req.user.role == 'operator') {
    return next();
  }
  else{
    return res.redirect('/user/find/' + req.user.id);
  }
};

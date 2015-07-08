/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  find: function(req, res) {
    var userId = req.param('id');

    if ((userId != req.user.id) && (req.user.role != 'operator') || !userId) {
      userId = req.user.id;
    }

    User.findOne().where({id: userId}).exec(function (err, user){
      if (!!err) {
        res.send(err);
      }
      delete user.role;
      delete user.createdAt;
      delete user.updatedAt;
      return res.view("user/profile", {user:user});
    })
  },

  listAllUsers: function (req, res) {
    sails.log.debug(req.user.id);
    User.find().where({id: {'!': req.user.id}}).sort('id').exec(function (err, users) {
      if (!!err) {
        return res.send(err);
      }
      for (var i in users) {
        delete users[i].role;
        delete users[i].createdAt;
        delete users[i].updatedAt;

      }
      return res.view("user/listusers", {users: users});
    })
  },

  addUser: function (req, res) {
    res.view("user/adduser");
  },

  create: function (req, res) {
    var regex = /^\+?[1-9]\d{1,14}$/;
    req.body.role = 'user';

      if (regex.test(req.body.phoneNnumber)){
        User.create(req.body).exec(function (err, user){
          if (!!err) {
            return res.json(err);
          }
          return res.redirect('/user/listAllUsers');
        });
      }
      return res.json({Error: 'Not a valid phone number'})
  },

  update: function (req, res) {
    console.log(req.method);
    var userId = req.param('id');

    if ((userId != req.user.id) && (req.user.role != 'operator') || !userId) {
      userId = req.user.id;
    }

    if (req.method === 'GET') {
      User.findOne({id: userId}).exec(function (err, user) {
        if (!!err) {
          return res.json(err);
        }
        return res.view("user/update", {user:user});
      })
    } else {
      User.update({id: userId}, req.body).exec(function (err, user) {
        if (!!err) {
          res.json(err);
        }
        if ((req.user.role == 'operator') && (req.user.id != req.param('id'))) {
          return res.redirect("/user/listAllUsers")
        } else {
          return res.redirect("user/find/" + req.user.id);
        }

      })
    }
  },

  delete: function (req, res) {
    User.destroy({id: req.param('id')}).exec(function (err, user) {
      if (!!err) {
        return res.json(err);
      }
      return res.redirect('/user/listAllUsers');
    });
  }

};


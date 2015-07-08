/**
 * ListCallsController
 *
 * @description :: Server-side logic for managing listcalls
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	find: function (req, res)  {
    var SQLQuery = "SELECT * FROM call_records where caller='" + req.user.phoneNumber + "' OR callee='" + req.user.phoneNumber + "'";

    ListCalls.query(SQLQuery, function (err, callList) {
        if (!!err){
          return res.send(err);
        }
        return res.view("user/callhistory", {callHistory: callList.rows, user: req.user});
      });
  }
};


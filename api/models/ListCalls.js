/**
* ListCalls.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'call_records',
  attributes: {
    caller: {
      type: 'string'
    },
    callee: {
      type: 'string'
    },
    start_date: {
      type: 'dateTime'
    },
    duration: {
      type: 'integer'
    },
    toJSON: function() {
      var obj = this.toObject();
      return obj;
    }
  },


};


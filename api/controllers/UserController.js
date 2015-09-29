/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  hi: function (req, res) {
    sails.log.info(req);
    return res.send("Hi there!");
  },
  list: function(req, res) {
    User.find().exec(function(err, data){
      if(err) {
        console.log(err);
      } else {
        sails.log.info(data);
        return res.send(data);
    } });
  },
  bye: function (req, res) {
    return res.redirect("http://www.google.com");
  }

};


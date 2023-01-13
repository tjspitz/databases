var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query(
      `SELECT users.username, messages.id, messages.message, messages.roomname FROM users INNER JOIN messages ON messages.user_id = users.id`,
      (err, res) => {
        if (err) {
          callback(err)
        } else {
          callback(null, res)
        }
      }
    );
  }, // a function which produces all the messages
  create: function (req, callback) {
    db.query(
      `INSERT INTO messages (user_id, message, roomname) VALUES((SELECT id FROM users WHERE username = '${req.username}'), '${req.message}', '${req.roomname}')`,
      (err) => {
        if (err) {
          callback(err)
        } else {
          callback(null, 'Message created')
        }
      }
    );
  } // a function which can be used to insert a message into the database
};

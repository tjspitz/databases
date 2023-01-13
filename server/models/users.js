var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query(
      `SELECT * FROM users`,
      (err, res) => {
        if (err) {
          callback(err);
        } else {
          callback(null, res);
        }
      }
    );

  },
  create: function (req, callback) {
    db.query(
      `INSERT INTO users (username) VALUES ('${req.username}')`,
      (err) => {
        if (err) {
          callback(err);
        } else {
          callback(null, 'User created');
        }
      }
    );
  }
};

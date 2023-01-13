var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, data) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.send(data);
      }
    })
  },
  post: function (req, res) {
    models.users.create(req.body, (err, data) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.send(data);
      }
    })
  }
};

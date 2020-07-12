const Item = require('../models/item.model');

const addItem = (req, res) => {
  let newItem = new Item(req.body);

  newItem.save((error, item) => {
    if (error) {
      res.status(432).json(error);
    }
    res.json(item);
  });
};

const getItemByTitle = (req, res) => {
  const query = req.query.title;
  Item.findOne({
    title: query,
  }).exec((error, item) => {
    if (error) {
      res.status(432).json(error);
    } else {
      res.json(item);
    }
  });
  //   return new Promise((resolve, reject) => {
  //     Item.findOne({
  //       title: title,
  //     }).exec((error, item) => {
  //       if (error) {
  //       } else {
  //       }
  //     });
  //   });
};

exports.addItem = addItem;
exports.getItemByTitle = getItemByTitle;

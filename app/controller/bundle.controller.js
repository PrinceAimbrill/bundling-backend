const db = require("../models");
const Bundle = db.bundles;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const productData = req.body;

  Bundle.create(productData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Product-Bundle.",
      });
    });
};

exports.findAll = (req, res) => {
  Bundle.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Bundle.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Bundle was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Bundle with id=${id}. Maybe Bundle was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Bundle with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Bundle.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Bundle was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Bundle with id=${id}. Maybe Bundle was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Bundle with id=" + id,
      });
    });
};

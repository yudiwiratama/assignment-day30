const db = require("../config/db");

function insertPetShop(req, res) {
  let data = [
    req.body.petId,
    req.body.quantity,
    req.body.status,
    req.body.completed,
  ];
  let insertQuery = `INSERT INTO petShop(petId, quantity, status, completed) VALUES (?);`;
  db.query(insertQuery, [data], function (error, results, fields) {
    if (error) throw error;
  });

  res.send({ message: "Data has been inserted", data: data });
}

function listPetShop(req, res) {
  let selectQuery = `SELECT * FROM petShop`;
  db.query(selectQuery, function (error, results, fields) {
    if (error) throw error;
    res.send({ message: "Data is found", data: results });
  });
}

function updatePetShop(req, res) {
  let updateQuery = `UPDATE petShop SET petId =?, quantity =?, status=?, completed=? WHERE id = ?`;
  let data = [
    req.body.petId,
    req.body.quantity,
    req.body.status,
    req.body.completed,
    req.params.id,
  ];

  db.query(updateQuery, data, function (error, result, fields) {
    if (error) throw error;
  });

  res.send({ message: "Data has been updated", data: req.body });
}

function deletePetShop(req, res) {
  let deleteQuery = `DELETE FROM petShop WHERE id = ?`;
  let data = [req.params.id];

  db.query(deleteQuery, data, function (err, deleted) {
    if (err) throw err;
  });
  res.send({ message: "Data has been deleted" });
}

module.exports = {
  insertPetShop,
  listPetShop,
  updatePetShop,
  deletePetShop,
};

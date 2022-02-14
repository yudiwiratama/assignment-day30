const db = require('../config/db');

let updateQuery = `UPDATE petShop SET petId =?, quantity =?, status=?, completed=? WHERE id = ?`;
let data = [1, "100", "available", "true", 1];

db.query(updateQuery, data, function (err, updated) {
    if (err) throw error;
    console.log(updated);
});

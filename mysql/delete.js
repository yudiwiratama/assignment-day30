const db = require('../config/db') 

let deleteQuery = `DELETE FROM petShop WHERE id = ?`
let data = [4]
db.query(deleteQuery, data, function (err, deleted) {
  if (err) throw err;
  console.log(deleted);
});

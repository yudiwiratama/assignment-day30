const db = require("../config/db");

let createQuery = `
CREATE TABLE IF NOT EXISTS petShop (
    id INT NOT NULL AUTO_INCREMENT,
    petId INT(10) NOT NULL, 
    quantity INT(10) NOT NULL, 
    status VARCHAR(12) NOT NULL,
    completed VARCHAR(10) NOT NULL,
    createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    updatedAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id)
)
COLLATE='utf8mb4_general_ci'
;
`;

db.query(createQuery, function (error, results, fields) {
  if (error) throw error;
  console.log("Table has been created");
});

db.end();

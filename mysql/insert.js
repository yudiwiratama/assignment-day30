const db = require('../config/db');

let data = [
    {petId: 1, quantity: 29, status: "placed", completed: "true"},
	{petId: 2, quantity: 30, status: "available", completed: "true"},
	{petId: 3, quantity: 42, status: "sold", completed: "true"}
];

data.forEach (value => {
    let insertQuery = `INSERT INTO petShop (petId, quantity, status, completed) VALUES (?);`;
    const {petId, quantity, status, completed} = value;
    db.query(insertQuery, {petId, quantity, status, completed} , function (error, results, fields) {
        if (error) throw error;
        console.log('Data has been inserted');
    });
});




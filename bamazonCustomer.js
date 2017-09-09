var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root', 

	password: 'cookie',
	database: 'bamazonDB',
});

connection.connect(function(err) {
	if (err) {
		return console.log(err);
	}

connection.query('SELECT * FROM products WHERE department_name=?',
   ["Grocery"],
 function(err, res) {
	if (err) {
		return console.log(err);
	}
console.log(res);

connection.end()
});
});
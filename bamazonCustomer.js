var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	user: 'root', 

	password: 'cookie',
	database: 'bamazonDB',
});

connection.connect(function (err) {
  if (err) {
    return console.log(err)
  }
  listItems()
})

function listItems () {
  console.log("Items for Sale")
  console.log('------------------')
  connection.query('SELECT * FROM products', function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + ' | ' + res[i].product_name + ' | ' + res[i].department_name + ' | ' + res[i].price + ' | ' + res[i].stock_quantity)
      console.log('------------------')
    }
    connection.end();
  });
};


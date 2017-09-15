var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "cookie",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) {
    return console.log(err);
  }
  listItems();
});

function listItems() {
  console.log("Items for Sale");
  console.log("------------------");
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
         res[i].item_id +
          " | " +
          res[i].product_name +
          " | " +
          res[i].department_name +
          " | " +
          "$" + res[i].price +
          " | " +
          res[i].stock_quantity
      );
      console.log("------------------");
    }
    purchaseInput();
  });
}

var purchaseInput = function() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Which item would you like to purchase?",
        name: "item"
      },
      {
        type: "number",
        message: "How many would you like to purchase?",
        name: "amount"
      }
    ])
    .then(function(purchase) {
      connection.query(
        "SELECT stock_quantity from products WHERE item_id = ?",
        [purchase.item],
        function(err, res) {

          //var cost = parseInt(purchase.amount * res[0].price);

          var quantityUpdated = parseInt(
            res[0].stock_quantity) - purchase.amount;

          if (err) {
            return console.log(err);
          }
          if (res[0].stock_quantity < purchase.amount) {
            return console.log("That quantity is not available")
            connection.end();
          }
          connection.query(
            "UPDATE products SET stock_quantity = ? WHERE item_id = ?",
            [quantityUpdated, purchase.item]
          );
          console.log('Your purchase was successful! Enjoy!')
          //console.log("The total cost is $" + cost + ".");

          connection.end();
        }
      );
    });
};

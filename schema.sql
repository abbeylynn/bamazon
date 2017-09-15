SELECT * FROM products

DROP TABLE products;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(32) NOT NULL,
    department_name VARCHAR(32) NOT NULL,
    price INTEGER NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
    );
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES 	("Apples", "Grocery", 5, 100),		
			("Bananas", "Grocery", 3, 100),
            ("Cookies", "Grocery", 2, 100),
            ("Water", "Grocery", 4, 100),
            ("Oranges", "Grocery", 5, 100);
            
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES 	("Gift Bags", "Party", 6, 100),		
			("Bows", "Party", 3, 100),
            ("Streamers", "Party", 7, 100),
            ("Silly Hats", "Grocery", 3, 100),
            ("Balloons", "Grocery", 1, 100);            
    
SELECT * FROM products;
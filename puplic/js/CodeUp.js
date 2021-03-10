const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
  rl.question('\nHow can I help you? (write in lowercase)\n(commands:items|price|order|most selling|sales|most sales|order DONE\n', function (answer) {
    if (answer == 'exit') //we need some base case, for recursion
        return rl.close(); //closing RL and returning from function.
    handleInput(answer);
    recursiveAsyncReadLine(); //Calling this function again to ask new question
  });
};

recursiveAsyncReadLine();


var items = [
  {id: 123, name: "Milk", price: 20, quantity: 0, sold: 0},
  {id: 101, name: "Suger", price: 5, quantity: 10, sold: 0},
  {id: 111, name: "IndonesianCoffee", price: 80, quantity: 20, sold: 0},
  {id: 112, name: "BrazilianCoffee", price: 170, quantity: 0, sold: 0},
  {id: 113, name: "ColombianCoffee", price: 250, quantity: 5, sold: 0},
  {id: 114, name: "LuwakCoffee", price: 1000, quantity: 1, sold: 0}
]

var orderArrayQT = [];
var orderArrayName = [];
var orderPrice = 0;
var totalPrice = 0;
var mostSellingUnits = 0;
var mostSellingName = [];
var mostSellingPrice = [];
var mostSalesName = []
var mostSalesUnits = 0;
var mostSalesPrice = 0;


var handleInput = function (input) {
  switch(input) {
    case 'items': console.log(items); break;
    case 'restock':  
      console.log(restock (items)); 
      break;
    case 'order DONE':
      orderDONE()
      break;
    case 'Sales': 
      console.log("Total Sales is ", totalPrice, "EGP"); 
      break;
    case 'Most Selling': 
      console.log("The most selling item is "+ selling(items)+ ", we sold", mostSellingUnits,"units for" ,mostSellingPrice,"EGP"); 
      break;
    case 'Most Sales': 
      console.log("The most sales came from "+ sales(items)+ ", we sold", mostSalesUnits,"units for" ,mostSalesPrice,"EGP"); 
      break;
    default:
      var res = input.split(" ");
      if (res[0] == "price") {
        price(res[1]);
      } else if (res[0] == "search") {
        search(res[1], Number(res[2]));
      } else if (res[0] == "order") {
        order (res[1], Number(res[2]));
      } else {
        console.log("Invalid Item")
      }
  }
}


function restock (items) {
  console.log("The following items need be restocked!")
  console.log("ID    |   Name  ");
  for (var j = 0; j < items.length; j++) {
    if (items[j].quantity == 0) {
      console.log(items[j].id + "   |   " + items[j].name);
    }
  }
}

function orderDONE () {
  if (orderArrayQT.length == 0) {
    console.log("There is no items in your order! Please add items using the order command.");
    return;
  }
  console.log ("Here is your order:");
  var date = new Date();
  console.log("Order Date:", date.toUTCString());
  console.log("QT   |   Name  ");
  for (var j = 0; j < orderArrayQT.length; j++) {
    console.log(orderArrayQT[j] + "    |   " + orderArrayName[j]);
  }
  console.log("Total: ", orderPrice, "EGP")
  orderArrayQT = [];
  orderArrayName = [];
  orderPrice = 0;
}

function selling (array) {
  mostSellingName = [];
  for (var k = 0; k < items.length; k++) {
    if (items[k].sold > mostSellingUnits) {
      mostSellingUnits = items[k].sold;
      mostSellingName = [items[k].name];
      mostSellingPrice = items[k].sold * items[k].price;
    } else if (items[k].sold == mostSellingUnits) {
      mostSellingName.push(items[k].name);
    }
  }
  return mostSellingName.join(", ");
}

function sales (array) {
  mostSalesName = [];
  for (var k = 0; k < items.length; k++) {
    if (items[k].sold*items[k].price > mostSalesPrice) {
      mostSalesPrice = items[k].sold*items[k].price;
      mostSalesName = [items[k].name];
      mostSalesUnits = items[k].sold;
    } else if (items[k].sold*items[k].price == mostSalesPrice) {
      mostSalesName.push(items[k].name);
    }
  }
  return mostSalesName.join(", ");
}

function search (itemName, itemQuantity) {
  if (itemQuantity <= 0 || isNaN(itemQuantity)) {
    console.log ("Invalid Quantity! Please enter a positive number.");

    return; 
  }

  for (var i = 0; i < items.length; i++) {
    if (itemName == (items[i].name)) {
      if (items[i].quantity == 0) {
        emparray.push(items[i].quantity);
        console.log("Sorry, we are out of", items[i].name);
        emparray = [];
      } else if (itemQuantity <= items[i].quantity) {
        emparray.push(items[i].quantity);
        console.log("Yes we have", itemQuantity, items[i].name, "Units available!");
        emparray = []
      } else if (itemQuantity > items[i].quantity) {
        emparray.push(items[i].quantity);
        console.log("We only have", emparray.join(), items[i].name, "Units available!")
        emparray = []
      }
    }
  }
}

function price (itemName) {
  var foundItem = false;
  var itemPrice = -1; // any invalid price

  for (var i = 0; i < items.length; i++) {
    if (itemName == (items[i].name)) {
      foundItem = true;
      itemPrice = items[i].price;

      break;
    }
  }

  if (foundItem) {
    console.log("The unit price for", items[i].name, "is ", itemPrice, " EGP");
  } else {
    console.log("Sorry we didn't find your item, are you sure you spelled it correctly?");
  }
}

function order (itemName, itemQuantity) {
  if (isNaN(itemQuantity) || itemQuantity <= 0) {
    console.log ("Invalid Quantity! Please enter a positive number.");

    return;
  }
  for (var i = 0; i < items.length; i++) {
    if (itemName == (items[i].name)) {
      if (itemQuantity > items[i].quantity) { // error detected
        console.log("Sorry, we are out of", items[i].name, "could not add it to your order.");
        return;
      }
      // now we can add our order :)
      addOrder(itemName, itemQuantity, i);
      return;
    }
  } 
  console.log("Please enter a valid item Name");
}

function addOrder(itemName, itemQuantity, i) { // assumes correct input
  console.log(itemQuantity, "units of", items[i].name, "available and added to your order.");

  // update item quantity
  items[i].sold += itemQuantity;
  items[i].quantity -= itemQuantity;

  // update order data
  var idx = orderArrayName.indexOf(items[i].name);
  if (idx == -1) {
    // new item
    orderArrayQT.push(itemQuantity);
    orderArrayName.push(items[i].name);
  } else {
    // item order already, update existing entry 
    orderArrayQT[idx] += itemQuantity;
  }
  
  orderPrice += (items[i].price * itemQuantity);
  totalPrice += (items[i].price * itemQuantity);
}

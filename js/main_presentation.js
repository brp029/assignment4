
var currentOrder = {
	hotdog: 0,
	frenchfries: 0,
	soda: 0,
	sauerkraut: 0
}; 

let subtotal, discount, tax, total, cartStr;
let myCart = document.getElementById("myCart");

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addItem);

let cartBtn = document.getElementById("cartBtn");
cartBtn.addEventListener("click", viewCart);

let checkOutBtn = document.getElementById("checkOutBtn");
checkOutBtn.addEventListener("click", checkOut);

function addItem() {
	console.log("here");
	
	// prompt for item number
	let currentItem = prompt("Please enter the item number for the first item you'd like to order.", 'Enter "1" for Hot Dog, "2" for French Fries, etc.');
	
	let currentItemText;
	
	if (currentItem == 1) {
		currentItemText = "hotdog";
	}
	else if (currentItem == 2) {
		currentItemText = "frenchfries";
	}
	else if (currentItem == 3) {
		currentItemText = "soda";
	}
	else if (currentItem == 4) {
		currentItemText = "sauerkraut";
	}
	console.log(currentItemText);
	
	// prompt for quantity
	let currentItemQuantity = parseInt(prompt("How many would you like to add to your order.", "Enter quanity"));
	
	// debug empty quantities 
	/*
	if (currentItemQuantity.isInteger == true) {
		console.log("It's a number!");
	}
	else {
		currentItemQuantity = 0;
	} */
	
	console.log(currentItemQuantity);
	
	// add items to cart
	currentOrder[currentItemText] += currentItemQuantity;
	
	console.log(currentOrder);
	
}// end addItem

function viewCart() {
	console.log("viewed");
	// calculate order subtotal
	let hotdogCost = currentOrder['hotdog']*4;
	let frenchfryCost = currentOrder['frenchfries']*3.5;
	let sodaCost = currentOrder['soda']*1.5;
	let sauerCost = currentOrder['sauerkraut']*1;
	
	hotdotCost = parseInt(hotdogCost.toFixed(2));
	frenchfryCost = parseInt(frenchfryCost.toFixed(2));
	sodaCost = parseInt(sodaCost.toFixed(2));
	sauerCost = parseInt(sauerCost.toFixed(2));
	
	subtotal = hotdogCost + frenchfryCost + sodaCost + sauerCost;
	console.log("Subtotal: $"+ subtotal);
	
	// if order total is > $20, give 10% discount
	if (subtotal > 20) {
		discount = subtotal/10;
		discount = parseInt(discount.toFixed(2));
		subtotal = subtotal - discount;
	} else {
		discount = null;
		console.log("discount = no")
	}
	console.log("Discount: $"+ discount);
	
	// add 6.25% tax
	tax = subtotal * .0625;
	console.log("Tax" + tax);
	tax = tax.toFixed(2);
	
	
	// calculate total
	subtotal = parseInt(subtotal);
	discount = parseInt(discount);
	tax = parseInt(tax);
	if (discount.isInteger = true){
		console.log("discount = yes");
		total = subtotal - discount + tax;
	} else {
		console.log("discount = no")
		total = subtotal + tax;
	}
	
	
	cartStr = "Your order: <br/>";
	
	if (currentOrder['hotdog'] != 0) {
	cartStr += "<span class='cartHeader'>Hot Dogs</span><br/><span class='cartDetails'>Quanity Ordered: " + currentOrder['hotdog'] + "</span><br/><span class='cartDetails'>Total Hot Dog Cost $" + hotdogCost.toFixed(2) + "</span>";
	} 
	
	if (currentOrder['frenchfries'] != 0) {
	cartStr += "<br/><span class='cartHeader'>French Fries</span><br/><span class='cartDetails'>Quanity Ordered: " + currentOrder['frenchfries'] + "</span><br/><span class='cartDetails'>Total French Fry Cost: $" + frenchfryCost.toFixed(2) + "</span>";
	} 
	
	if (currentOrder['soda'] != 0) {
	cartStr += "<br/><span class='cartHeader'>Soda</span><br/><span class='cartDetails'>Quanity Ordered: " + currentOrder['soda'] + "</span><br/><span class='cartDetails'>Total Soda Cost: $" + sodaCost.toFixed(2) + "</span>";
	} 
	
	if (currentOrder['sauerkraut'] != 0) {
	cartStr += "<br/><span class='cartHeader'>Sauerkraut</span><br/><span class='cartDetails'>Quanity Ordered: " + currentOrder['sauerkraut'] + "</span><br/><span class='cartDetails'>Total Sauerkraut Cost $" + sauerCost.toFixed(2) + "</span>";
	} 
	
	cartStr += "<br/><br/><span class='cartHeader'>Subtotal: $" + subtotal.toFixed(2);
	
	if (discount.isInteger = true) {
		cartStr += "</span><br/><br/><span class='cartHeader'>Discount: $" + discount.toFixed(2);
	}
	
	cartStr += "</span><br/><br/><span class='cartHeader'>Tax: $" + tax.toFixed(2) + "<br/><br/><span class='cartTotal'>Total: $" + total.toFixed(2);
	
	// make cart visible
	myCart.style.visibility = "visible";
	
	// write cart and totals to screen
	document.getElementById("myCart").innerHTML = cartStr;
	
}// end addItem

function checkOut() {
	console.log("checked out");
	
	// set cart array to empty
	currentOrder = {
	hotdog: 0,
	frenchfries: 0,
	soda: 0,
	sauerkraut: 0
	};
	// set cart visibility to hidden
	myCart.innerHTML = "<span class='cartHeader'>Thanks for your order!</span>"

}// end checkOut


let myVariables;

function addItem() {
	// prompt for item number
	
	// prompt for quantity
	
	// add items to cart
	
	
}// end addItem

function viewCart() {
	// calculate order subtotal
	
	// if order total is > $20, give 10% discount
	
	// add 6.25% tax
	
	// calculate total
	
	// write cart and totals to screen
	document.getElementById("myCart").innerHTML = "Click any open square to claim it."
	
}// end addItem

function checkOut() {
	// set cart array to empty
	// set cart visibility to hidden

}// end checkOut

function copyme() {
	// prompt for item number
	// prompt for quantity
	
	// add items to cart
	
	box1val = 1;
	box2val = 2;
	box3val = 3;
	box4val = 4;
	box5val = 5;
	box6val = 6;
	box7val = 7;
	box8val = 8;
	box9val = 9;
	
	// start turn counter
	turncounter = 1;
	
	//set game status to on
	gamestatus = "gameon";
	
	//clear board from previous game, if needed
	for (i = 0; i<9; i++) {
		x=i+1;
		square = "box"+x;
		document.getElementById(square).innerHTML = " ";
	}
	
	// write instructions to screen
	document.getElementById("directions").innerHTML = "Click any open square to claim it."
	
	// call turn indicator function
	yourTurn();
}// end addItem
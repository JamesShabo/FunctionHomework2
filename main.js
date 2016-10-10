// //1 Show me how to calculate the average price of all items.
var price = 0;
var avgPrice = 0;
items.forEach(function(b) {
	price += b.price;
	avgPrice = price/items.length

});
var answer1 = "Average price is $" + avgPrice.toFixed(2)

document.getElementById('answer1').innerHTML = answer1


//2 Show me how to get an array of items that cost between $14.00 and $18.00 USD

var filterItems = [];

items.filter(function(c) {
	if (c.price > 14 && c.price < 18) {
		filterItems.push(c.title)
	}
})

document.getElementById('answer2').innerHTML = filterItems


//3 Which item has a "GBP" currency code? Display it's name and price.
var gbpItem = "" 
items.filter(function(d) {
	if (d.currency_code === "GBP") {
		gbpItem += "Item: " + d.title + "Price: $" + d.price
	}
})

console.log(gbpItem)

document.getElementById('answer3').innerHTML = gbpItem


//4 Display a list of all items who are made of wood.

var woodItems = items.filter(function(e) {
	return e.materials.indexOf("wood") !== -1
})

var woodHtml = ""

var woodItemNames = woodItems.forEach(function(m) {
	woodHtml += "<ul>"
	woodHtml += "<li>" + m.title + "</li>"
	woodHtml += "</ul>"
})

document.getElementById("answer4").innerHTML = woodHtml

//5 Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

var complexItems = items.filter(function(k) {
	return k.materials.length > 8
})

complexHTML = "";

complexItems.forEach(function(l) {
	complexHTML += "<ul>"
	complexHTML += "<li>" + l.title + "</li>"
	l.materials.forEach(function(material){
		complexHTML += "<li>" + material + "</li>"
	})
	complexHTML += "</ul>"
})

document.getElementById("answer5").innerHTML = complexHTML


//6 How many items were made by their sellers?


var madeBy = items.filter(function(g) {
	return g.who_made === "i_did" 
})

document.getElementById("answer6").innerHTML = madeBy.length + " items were made by their sellers."


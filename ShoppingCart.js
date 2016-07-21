var list = [];

var item = function(name, cost, amount, total) {
  this.name = name
  this.cost = cost
  this.amount = amount
  this.total = cost * amount

};
alert("Welcome to L&Y Supermarket! Please, make your way through our aisle and select the products you need!");

var apple = new item("apple", .95, prompt("How many apples would you like?"));

list.push(apple);

var pear = new item("pear", 1.05, prompt("How many pears would you like?"));
list.push(pear);

var banana = new item("banana", 1.85, prompt("How many bananas would you like?"));
list.push(banana);

var rice = new item("bag of rice", 7.20, prompt("How many bags of rice would you like?"));
list.push(rice);

var pudding = new item("pudding", .55, prompt("How much pudding would you like?"));
list.push(pudding);

/*var checkOut =  function() 
{
var completeTotal = (apple.total + pear.total + banana.total + rice.total + pudding.total);

var result = Math.round(completeTotal * 100) / 100
  //console.log(result);
var roundResult = result.toFixed(2);
alert("Your Total before tax is: " + roundResult);

var tax = .075
var endTax = tax * result
  //console.log(endTax);
var roundEndtax = endTax.toFixed(2);
alert("The tax that will be added to your total is: " + roundEndtax);


var finalTotal = result + endTax
var endTotal = Math.round(finalTotal * 100) / 100
  // console.log(endTotal);
var roundEndtotal = endTotal.toFixed(2);
alert("Your final total is: " + roundEndtotal);
}*/

var checkOut =  function() 
{

  var completeTotal = 0;

  for (var i = 0; i < list.length; i++)
  {
      completeTotal = completeTotal + list[i].total;
  }

var result = Math.round(completeTotal * 100) / 100;
  //console.log(result);
var roundResult = result.toFixed(2);
alert("Your Total before tax is: " + roundResult);
var roundResultNum = parseFloat(roundResult);

var taxPercent = .075
var endTax = taxPercent * result;
  //console.log(endTax);
var roundEndTax = endTax.toFixed(2);
var roundEndTaxNum = parseFloat(roundEndTax);
alert("The tax that will be added to your total is: " + roundEndTax);

var finalTotal = roundResultNum + roundEndTaxNum;
alert("Your final total is: " + finalTotal);

return finalTotal;

}


for (var j = 0; j < list.length; j++)
{
  alert("Here is your Shopping List! You have purchased a/an " + list[j].name + " and the amount is " + list[j].amount + "!"); 
}

var remove = prompt("Would you like to remove an item from your list? ('Y' or 'N')")
  if(remove === "Y")
  {
    var change = prompt("What item would you like to remove ('Please Specify in Uppercase!') ");
    if(change === "Apple")
    {
      list.splice(0, 1);
    }
    else if (change === "Pear")
    {
         list.splice(1, 1);
    }
    else if (change ==="Banana")
    {
         list.splice(2, 1);
    }
    else if (change === "Rice")
    {
        list.splice(3, 1);
     }
    else if (change === "Pudding")
    {
        list.splice(4, 1);
    }
  }
  
      var finalTotal = checkOut();
      if(finalTotal >= 100)
      {
        var card = prompt("Since your total is greater than $100, we can set up a credit line for you, if you would like.");
        if(card === "Yes")
        {
           alert("Please swipe your card here.");
        }
        else if(card === "No")
        {
          alert("Ok, please pay in cash.");
        }
      }
      else
      {
        alert("Since your order isn't more than $100, your payment must be made in cash.")
      }
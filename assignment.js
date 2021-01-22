

// problem-1

function kilometerToMeter(km) {
    var meter = km * 1000;
    return meter;
}
var result = kilometerToMeter(2);
console.log(result);

// problem-2
function budgetClculator( watch, mobile, laptop ) {
    var product1 = watch * 50;
    var product2 = mobile * 100;
    var product3 = laptop * 500;
    var total = product1 + product2 + product3;
    return total;
}
var totalAmount = budgetClculator(5, 5, 5);
console.log(totalAmount);
// problem-3

function hotelCost(days) {
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var first10Days = 10 * 100;
        var remaining = days - 10;
        var second20Days = remaining * 80;
        cost = first10Days + second20Days;
    }
    else{
        var first10Days = 10 * 100;
        var second20Days = 10 * 80;
        var remaining = days - 20;
        var thirdAllDays = remaining * 50;
        var cost = first10Days + second20Days + thirdAllDays;
    }
    return cost;
}
var costResult = hotelCost(25);
console.log(costResult);

// problem -4

function megaFriend(array) {
  var largeName = "";

  array.forEach(function(word) {
    if(word.length > largeName.length) {
      largeName = word;
    }
  });

  return largeName;
}

var name = megaFriend(["Mohib", "mohammadRahman", "Mohammad", "Rahman"]);

console.log(name);
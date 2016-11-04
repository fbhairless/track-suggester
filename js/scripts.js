
function Pizza(qty, size, toppings) {
  this.quantity = qty;
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.pizzaPrice= function(quantity, size, toppings) {
  var totalPrice = quantity * (size + toppings);
  console.log("quantity = " + quantity);
  console.log("size = " + size);
  console.log("topping = " + toppings);
  return totalPrice;
}

$(document).ready(function(){
  $("form#pizza-info").submit(function(event){
    event.preventDefault();

    var  quantity= parseInt($('input[name="qty-choices"]:checked').val());
    var size = parseFloat($('input[name="size-choices"]:checked').val());
    var toppings = parseFloat($('input[name="top-choices"]:checked').val());
    var newPizza = new Pizza(quantity, size, toppings);
    var totalPrice = newPizza.pizzaPrice(quantity, size, toppings);

    $(".pizza-price").append("<span>" + totalPrice + "</span>");

    $("#clear-account").click(function(event) {
      event.preventDefault();
      document.location.reload(true);
    });
  });
});

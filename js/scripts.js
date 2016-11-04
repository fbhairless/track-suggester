
function Pizza(qty, size, topping1, topping2) {
  this.quantity = qty;
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  console.log("topping = " + topping1 + "  " + topping2);
}

Pizza.prototype.pizzaPrice= function(quantity, size, topping1, topping2) {
  var totalPrice = quantity * (size + topping1 + topping2);
  console.log("quantity = " + quantity);
  console.log("size = " + size);
  console.log("topping = " + topping1 + "  " + topping2);
  return totalPrice;
}

$(document).ready(function(){
  $("form#pizza-info").submit(function(event){
    event.preventDefault();

    var quantity= parseInt($('input[name="qty-choices"]:checked').val());
    var size = parseFloat($('input[name="size-choices"]:checked').val());
    var topping1 = parseFloat($('input[name="top-choice1"]:checked').val());
    var topping2 = parseFloat($('input[name="top-choice2"]:checked').val());
    var newPizza = new Pizza(quantity, size, topping1, topping2);
    var totalPrice = newPizza.pizzaPrice(quantity, size, topping1, topping2);

    $(".pizza-price").append("<span>" + totalPrice + "</span>");

    $("#clear-account").click(function(event) {
      event.preventDefault();
      document.location.reload(true);
    });
  });
});

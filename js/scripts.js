//Back End

function Pizza(pizzasize, crusttype, house, veggieToppings, meatToppings){
  this.pizzasize = pizzasize;
  this.crusttype = crusttype;
  this.house = house;
  this.meatToppings = meatToppings;
  this.veggieToppings = veggieToppings;
  this.price = 12;
}

Pizza.prototype.calculatePrice = function(){
  for(i=0; i<this.veggieToppings.length; i++){
    this.price += 1.25;
  }
   for(i=0; i<this.meatToppings.length; i++){
    this.price += 2;
  }
  if(this.pizzasize === "large"){
    this.price += 3;
  }
  if(this.crusttype === "gluten-free"){
     this.price += 3;
   }
   if(this.house === "specialty"){
    this.price += 3;
   }
  return this.price;
  this.price = 0
}

//Front-End
$(document).ready(function() {
  var veggieToppings = [];
  var meatToppings = [];
  var house;
  var city;
  var street;
  var state;
  $(".house").click(function(){
    house = $(".house").val();
   });
  $("#deliver").click(function() {
    $(".delivery").show();
  });
  $("form#create").submit(function(event){

    event.preventDefault();
    var pizzasize = $("#size").val();
    var crusttype = $("#type").val();

    $("input:checkbox[name=veggieToppings]:checked").each(function() {
      veggieToppings.push($(this).val());
    });
    $("input:checkbox[name=meatToppings]:checked").each(function() {
      meatToppings.push($(this).val());
    });
    var newPizza = new Pizza(pizzasize, crusttype, house, veggieToppings, meatToppings)
    var orderTotal = newPizza.calculatePrice();
    $("#order").slideDown();
    $("#list-order").append("A " + pizzasize + " " + crusttype + " pizza with " + veggieToppings + meatToppings + ". Your order total is: $" + orderTotal + ".");
    veggieToppings = [];
    meatToppings = [];
  });
  $("#pizza-delivery").click(function() {
    street = $("input.new-street").val();
    city = $("input.new-city").val();
    state = $("input.new-state").val();


  });
  $("#send-pizza").click(function() {
    $("#delivery-location").append("Your Order will be delivered to " + street + " " + city + " " + state + ".");
  });

});

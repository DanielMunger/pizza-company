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


$(document).ready(function() {
  var veggieToppings = [];
  var meatToppings = [];
  var house;
  $(".house").click(function(){
    house = $(".house").val();
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
    $("#order").show();
    $("#list-order").append("<li>" + pizzasize + ' ' + crusttype + "</li>");
    $("#list-order").append("<li>" + 'with ' + veggieToppings + meatToppings + "</li>");
    $("#list-order").append("<li>" + '$' + orderTotal + "</li>");
    veggieToppings = [];
    meatToppings = [];
  });

});

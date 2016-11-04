function Pizza(size, type, specialty){
  this.size = size;
  this.type = type;
  this.specialty = specialty;
  this.meatToppings = [];
  this.veggieToppings = [];
  this.price = 0;
}

Pizza.prototype.calculatePrice{
  if(this.size === "regular"){
    this.price += 12;
  }else if(this.size === "large"){
    this.price += 15;
  }else if(this.type === "gluten-free"){
    this.price += 3;
  }else if(this.specialty){
    this.price += 3;
  }
  for(i=0; i<this.veggieToppings.length; i++){
    this.price += 1.25;
  }
  for(i=0; i<this.meatToppings.length; i++){
    this.price += 2;
  }

}


$(document).ready(function() {
  var new Pizza(size, type, specialty);
});

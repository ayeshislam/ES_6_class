function animal(noOfLegs,vegetarian){
let obj={};
obj.noOfLegs=noOfLegs;
obj.vegetarian=vegetarian;

obj.eat=function(){
  console.log("eating...");
}

obj.greet=function(){
  console.log(`Hi,I have ${this.noOfLegs} legs`);
}

return obj;
}

let a1 = animal(4, true);
console.log(a1.eat());
console.log(a1.greet());
//factory function to a constructor function
function AnimalCF(noOfLegs,vegetarian){

  
animal.call(this,noOfLegs,vegetarian);

this.eat=function(){
  console.log("eating...");
}

this.greet=function(){
  console.log(`Hi,I have ${noOfLegs} legs`);
}
}

let animalCF = new AnimalCF(4, true);
console.log(animalCF.eat()); 
console.log(animalCF.greet());

//factory function to an ES6 class

class AnimalES6{
  constructor(noOfLegs,vegetarian){
    animal.call(this,noOfLegs,vegetarian);

    this.eat=function(){
      console.log("eating...");
    }
    
    this.greet=function(){
      console.log(`Hi,I have ${noOfLegs} legs`);
    }
  
  
  }
}


let animalES6 = new AnimalES6(4, true);
console.log(animalES6.eat()); // eating...
console.log(animalES6.greet()); 


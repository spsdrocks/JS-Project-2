/*Beginning of Program Comments Go Here





Title: Creature Life Converter

Welcome: Welcome to our website, enjoy your stay





Important Program Elements Used: 
For loops
Functions
Cat age
Radio button to JS
logical operators
HTML
CSS
Prompt for name
Progress bar





Beginning of Program */

//Function for the radio buttons
function getValue(){
  let dogBoolean; //Used for calling dog input
  let catBoolean; //Used for callin cat input
  dogBoolean = document.getElementById("dog");
  catBoolean = document.getElementById("cat");
  if (dogBoolean.checked == true){
      dogInput();
    
    } else if (catBoolean.checked == true){
      catInput();
    
    } else{
      alert("Please select a value");
        
  }//End of if statement for radio buttons
}//End of function for radio buttons 





function catInput() {
  animalAge = prompt("Please enter the age of you cat in human years.", "");
  animalAge = Number(animalAge);
  if (((animalAge > 0) && (animalAge < 39)) && (typeof animalAge == "number")) {
    catConverter(animalAge);
    
  } else {
    alert("Please select a logical value.");
    catInput();
  }//End of if statement for catInput
}//End of catInput function





//Output 1
function catConverter(catConv) {
  let catAge;
  
//Re-iterate input
  console.log(`You entered ${animalAge}`)
  if (catConv <= 1) {
      catAge = catConv * 15;
      catConv = catConv - catConv;
      document.getElementById("age").innerHTML = 
        `Your cat is ${catAge} years old`;
      console.log(`Your cat is ${catAge} years old`);
      catAge = (((catAge / 168) * 100) + "%");
      document.getElementById("bar").style.width = catAge;
      return catAge;
    
    } else if (catConv <= 2) {
      catAge = 15;
      catConv = catConv - 1;
      catAge = catAge + (catConv * 9);
      document.getElementById("age").innerHTML = 
        `Your cat is ${catAge} years old`;
      console.log(`Your cat is ${catAge} years old`);
      catAge = (((catAge / 168) * 100) + "%");
      document.getElementById("bar").style.width = catAge;
      return catAge;
    
    } else {
      catAge = 24;
      catConv = catConv - 2;
    }
  for (let x = 0; x < 39; x++) {
    if (catConv > 0) {
      catAge = catAge + 4;
      catConv = catConv - 1;
      
    } else {
      document.getElementById("age").innerHTML = 
        `Your cat is ${catAge} years old`;
      console.log(`Your cat is ${catAge} years old`);
      catAge = (((catAge / 168) * 100) + "%");
      document.getElementById("bar").style.width = catAge;
      return catAge;
    } 
  } //End of if statement for determining cat age
} // End of function for determining cat age





//Function dog
function dogInput() {
  animalAge = prompt("Please enter the age of you dog in human years.", "");
  animalAge = Number(animalAge);
  if (((animalAge > 0) && (animalAge < 31)) && (typeof animalAge == "number")) {
    dogConverter(animalAge);
    
  } else {
    alert("Please select a logical value.");
    dogInput();
  } //End of if statement for dog input
} //End of function dog Input





//Output 2
function dogConverter(dogConv) {
  let dogAge;

//Re-iterate input
  console.log(`You entered ${animalAge}`)
  if (dogConv <= 1) {
      dogAge = (dogConv * 15);
      dogConv = (dogConv - dogConv);
      console.log(dogAge);
      document.getElementById("age").innerHTML = 
        `Your dog is ${dogAge} years old`;
      console.log(`Your dog is ${dogAge} years old`);
      dogAge = (((dogAge / 164) * 100) + "%");
      document.getElementById("bar").style.width = dogAge;
      return dogAge;
    
    } else if (dogConv <= 2) {
      dogAge = 15;
      dogConv = (dogConv - 1);
      dogAge = dogAge + (dogConv * 9);
      document.getElementById("age").innerHTML = 
        `Your dog is ${dogAge} years old`;
      console.log(`Your dog is ${dogAge} years old`);
      dogAge = (((dogAge / 164) * 100) + "%");
      document.getElementById("bar").style.width = dogAge;
      return dogAge;
    
    } else {
      dogAge = 24;
      dogConv = (dogConv - 2);
    }
  for (let y = 0; y < 32; y++) {
    if (dogConv > 0) {
      dogAge = (dogAge + 5);
      dogConv = (dogConv - 1);
      
    } else {
      document.getElementById("age").innerHTML = 
        `Your dog is ${dogAge} years old`;
      console.log(`Your dog is ${dogAge} years old`);
      dogAge = (((dogAge / 164) * 100) + "%");
      document.getElementById("bar").style.width = dogAge;
      return dogAge; 
    }
  } //End of if statement for converting dog age
} //End of function for converting dog age





//Start of variable declaration
let animalAge; //Used for storing the age that the person enters
let person; //Used for storing the persons name
//End of variable declaration





//Start of main





//Title
console.log("┌─┐┬─┐┌─┐┌─┐┌┬┐┬ ┬┬─┐┌─┐  ┬  ┬┌─┐┌─┐  ┌─┐┌─┐┌┐┌┬  ┬┌─┐┬─┐┌┬┐┌─┐┬─┐")
console.log("│  ├┬┘├┤ ├─┤ │ │ │├┬┘├┤   │  │├┤ ├┤   │  │ ││││└┐┌┘├┤ ├┬┘ │ ├┤ ├┬┘")
console.log("└─┘┴└─└─┘┴ ┴ ┴ └─┘┴└─└─┘  ┴─┘┴└  └─┘  └─┘└─┘┘└┘ └┘ └─┘┴└─ ┴ └─┘┴└─")





//Start of prompting the user for their name (Welcome)
person = prompt("Please enter your name", "Person");
if (person != null) {
  document.getElementById("name").innerHTML =
  "Hello " + person.toLocaleLowerCase() + "! How are you today?";
  document.getElementById("thank-you").innerHTML = `Thank you ${person}, for visiting our website, please come again for converting your animal's age!`;
}//End of prompting the user for their name





//Greeting user
console.log(`You entered ${person}`);
console.log("Hello " + person.toLocaleLowerCase() + "! How are you today?");





//Intro
console.log("This is our website, this website is for converting your pets human age to their age.")





//Explaintion
console.log("To use this website you just need to select what animal you want convert their human age to their age then fill out the prompt with a logical value.")





//Thank you
console.log(`Thank you ${person}, for visiting our website, please come again for converting your animal's age!`);





/*
End of main





Test code:

document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontFamily = "Arial";
document.getElementById("p2").style.fontSize = "10px";





End of program




  
Program comments
*/
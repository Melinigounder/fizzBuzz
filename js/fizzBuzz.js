//let myOutputElement = document.getElementById("theOutput");
let myElement;
let theText;
const theOutputParagraph =document.getElementById("theOutputParagraph");

let myArray=[];

function submitFunction() {

    for (let i= 1; i < 101; i++) {

    if ((i % 3 === 0) && (i % 5 === 0)) {
            myArray.push("Fizz-Buzz");
        }

    else if (i % 3 === 0) {
    myArray.push("Fizz");
  
    }
     else if (i % 5=== 0) {
    myArray.push("Buzz");
  
    }

    else {
        myArray.push(i);
    }

    
    //myOutputElement.innerHTML=myArray;
}

for (let i=0; i < myArray.length; i++) {
    myElement = document.createElement("h3");
    theText = document.createTextNode(myArray[i]);
    myElement.appendChild(theText);
    document.getElementById("theOutput").appendChild(myElement);
    
    }
}
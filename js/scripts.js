function changeText(){
    var textsArray= ["TRIMESTER 1","TRIMESTER 2", "TRIMESTER 3"]
    var number= getRandomNumberBetween(0,textsArray.length-1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML= textsArray[number];
     }

function getRandomNumberBetween(min,max){
     return Math.floor(Math.random()*(max-min+1)+min);
}
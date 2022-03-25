    // Pin Generate

    var generateNumber = document.getElementById("generate-btn");
    var generatePin = document.getElementById("generate-pin");
    generateNumber.addEventListener("click", function(){
        var number = Math.round(  Math.ceil( Math.random() *1000000 ).toPrecision(6));
        generatePin.innerHTML = number;
    });

    // submit pin
    var inputPin = document.getElementById("input-pin");
    var inputCode = inputPin.innerHTML;
    console.log(inputCode);
    var inputButton = document.querySelectorAll(".calc-button-row .button");
    for (let i = 0; i < inputButton.length; i++) {
    inputButton[i].addEventListener("click", function(even){
        var sum = even.target.innerHTML;
        sum = inputPin.innerHTML + sum ;
        inputPin.innerHTML = sum;
    });
    };
    document.getElementById("clear").addEventListener("click", function(){
        inputPin.innerHTML = "";
    });
    document.getElementById("dicriment").addEventListener("click", function(){
        inputPin.innerHTML = "";
    });


    // pin submit 
    document.getElementById("submit-btn").addEventListener("click", function(){

    if(inputPin.innerHTML == ""){
        notFill();
    }
    else if(generatePin.innerHTML === inputPin.innerHTML){
        match();
    }
    else{
        notMatch();
    }
     });

     function match(){
        var right = document.getElementById("notify-right").style.display = "block";
        var wrong = document.getElementById("notify-wrong").style.display ="none";
        var warning = document.getElementById("notify-warning").style.display ="none";
     };
     function notMatch(){
        var right = document.getElementById("notify-right").style.display = "none";
        var wrong = document.getElementById("notify-wrong").style.display ="block";
        var warning = document.getElementById("notify-warning").style.display ="none";

     };
     function notFill(){
        var right = document.getElementById("notify-right").style.display = "none";
        var wrong = document.getElementById("notify-wrong").style.display ="none";
        var warning = document.getElementById("notify-warning").style.display ="block";
        
     };
$( document ).ready(function(){

    var randTarget=Math.floor(Math.random()*102+19)
    var clickedTotal= 0; 
    var wins= 0;
    var losses = 0;
    var rand1= Math.floor(Math.random()*12+1)
    var rand2= Math.floor(Math.random()*12+1)
    var rand3= Math.floor(Math.random()*12+1)
    var rand4= Math.floor(Math.random()*12+1)
    

    
    $("#targetNumber").text(randTarget);
    $("#wins").text(wins);
    $("#losses").text(losses);
  
    function gameReset(){
        randTarget=Math.floor(Math.random()*102+19);
        console.log(randTarget);
        $("#targetNumber").text(randTarget);
        rand1= Math.floor(Math.random()*12+1);
        console.log(rand1);
        rand2= Math.floor(Math.random()*12+1);
        console.log(rand2);
        rand3= Math.floor(Math.random()*12+1);
        console.log(rand3);
        rand4= Math.floor(Math.random()*12+1);
        console.log(rand4);
        clickedTotal= 0;
        $("#score").text(clickedTotal);
        } 

    function victory(){
    alert("CONGRATULATIONS!!!");
    wins++; 
    $("#wins").text(wins);
    gameReset();
}

    function failure(){
    alert ("You lose! You get NOTHING!");
    losses++;
    $("#losses").text(losses);
    gameReset();
  }

    $(".emerald").on ("click", function(){
        clickedTotal = clickedTotal + rand1;
        $("#runningTotal").text(clickedTotal); 

        if (clickedTotal == randTarget){
            victory();
          
        } else if (clickedTotal > randTarget){
            failure();
        }   
    })  

    $(".sapphire").on ("click", function(){
        clickedTotal = clickedTotal + rand2;
        $("#runningTotal").text(clickedTotal); 

        if (clickedTotal == randTarget){
            victory();
          
        } else if (clickedTotal > randTarget){
            failure();
        } 
    })  

    $(".ruby").on ("click", function(){
        clickedTotal = clickedTotal + rand3;
        $("#runningTotal").text(clickedTotal);

        if (clickedTotal == randTarget){
            victory();
          
        } else if (clickedTotal > randTarget){
            failure();
        } 
    })  

    $(".amethyst").on ("click", function(){
        clickedTotal = clickedTotal + rand4;
        $("#runningTotal").text(clickedTotal); 

        if (clickedTotal == randTarget){
            victory();
        
        } else if (clickedTotal > randTarget){
            failure();
        }

    });   
  }); 
var rightCount= 0
var wrongCount= 0
var noneCount= 0




$(document).ready(function(){


var number = 10;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;




function startTimer(){
  var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
    }
    if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
    }
  }, 1000);
}

$("#startClock").click(function(){
    startTimer();
});




  $("#turnin").on("click", function(){


    var oneAnswer= $("input[name='Q1']:checked").val();
    var twoAnswer= $("input[name='Q2']:checked").val();
    var threeAnswer= $("input[name='Q3']:checked").val();
    var fourAnswer= $("input[name='Q4']:checked").val();
    var fiveAnswer= $("input[name='Q5']:checked").val();


    var answerArray = [oneAnswer, twoAnswer, threeAnswer, fourAnswer, fiveAnswer];

    var correctArray = [1, 1, 1, 1, 1];

    for (var i= 0; i < answerArray.length; i++){

      if (parseInt(answerArray[i])==correctArray[i]){
        rightCount++;
      }

      else {
        wrongCount++;
      }


    }

    console.log(rightCount);
    console.log(wrongCount);





  });
}); 

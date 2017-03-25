$(document).ready(function() {

            $("#startGameButton").click(function() {
                $("#startGameButton").remove();
                $("#questions").show();

                //taken from StackOverflow
                function timer(time, update, complete) {
                    var start = new Date().getTime();
                    var interval = setInterval(function() {
                        var now = time - (new Date().getTime() - start);
                        if (now <= 0) {
                            clearInterval(interval);
                            complete();
                        } else update(Math.floor(now / 1000));
                    }, 100); // the smaller this number, the more accurate the timer will be
                }

                timer(
                    180000, // milliseconds
                    function(timeleft) { // called every step to update the visible countdown
                        document.getElementById("timer").innerHTML = timeleft + " second(s)";
                    },
                    function() { // what to do after
                        $("#timer").replaceWith("<h2>Time is up!<h2>");
                    });

            });

 });

var numberCorrect = 0;
var numberWrong = 0;

//////////CONDITIONALS TO TEST FOR CORRECT AND INCORRECT ANSWERS ONCE TIMER IS DONE OR SUBMIT BUTTON IS HIT
     $(".input").on("click", function() {

    if  $("input[name="alter"]:checked").val(); {
    numberCorrect++;
    console.log(numberCorrect);
}
    else {
      numberWrong++;
    }

    if  $("input[name="son"]:checked").val(); {
    numberCorrect++;}
    else {
      numberWrong++;
    }

    if  $("input[name="nicknames"]:checked").val(); {
    numberCorrect++;}
    else {
      numberWrong++;
    } 

    if  $("input[name="nicknames"]:checked").val(); {
    numberCorrect++;}
    else {
      numberWrong++;
    } 

  if  $("input[name="key"]:checked").val(); {
    numberCorrect++;}
    else {
      numberWrong++;
    }

    if  $("input[name="gray"]:checked").val(); {
    numberCorrect++;}
    else {
      numberWrong++;
      }

    });



// ///////////APPEND RESULTS TO PAGE WHEN SUBMIT BUTTON IS HIT////////////////////////////////







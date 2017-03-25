$(document).ready(function() {
    var userAnswer;

            $("#startGameButton").click(function() {
                var numberCorrect = 0;
                var numberWrong = 0;
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
                  // what to do after
                        function () {
                        $("#timer").replaceWith("<h2>Time is up!<h2>");


              
                
                    }); 


 });

//////////CONDITIONALS TO TEST FOR CORRECT AND INCORRECT ANSWERS ONCE TIMER IS DONE OR SUBMIT BUTTON IS HIT
     //EVENT HANDLER FOR SUBMIT BUTTON/////
                
                  $("input[type='submit']").click(function(){
                    var userAnswer = $("input[name='alter']:checked").val();
                    console.log(userAnswer);
                });

            //     if  (userAnswer === 1 ) {
            //     numberCorrect++;
            //     console.log(numberCorrect);
            // }
            //     else {
            //       numberWrong++;
            //     }

            //    var userAnswer = $("input[name='alter']:checked").val();
            //             console.log(userAnswer);

            //     if  (userAnswer === 1 ) {
            //     numberCorrect++;
            //     console.log(numberCorrect);
            // }
            //     else {
            //       numberWrong++;
            //     }

           

  

    });





// ///////////APPEND RESULTS TO PAGE WHEN SUBMIT BUTTON IS HIT////////////////////////////////







$(document).ready(function() {

    var answerOne;
    var answerTwo;
    var answerThree;
    var answerFour;
    var answerFive;
    var numberCorrect = 0;
    var numberWrong = 0;

            $("#startGameButton").click(function() {
                // var numberCorrect = 0;
                // var numberWrong = 0;
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

          });

//////////CONDITIONALS TO TEST FOR CORRECT AND INCORRECT ANSWERS ONCE TIMER IS DONE OR SUBMIT BUTTON IS HIT
     //EVENT HANDLER FOR SUBMIT BUTTON/////
      ///////////////////////////1st Question////////////////////////////////////////////          
                  $("input[type='submit']").click(function(){
                    var numberCorrect = 0;
                    var numberWrong = 0;
                    var answerOne = $("input[name='alter']:checked").val(); //////1st Question 
                    console.log(answerOne);
                           
                
                if  (answerOne === "1" ) { //Took me an hour to figure out this needed to be a string!
                numberCorrect++;
                console.log(numberCorrect);
            }
                else if (! $("input[name='alter']:checked") ) {
                    numberWrong++;
                    console.log(numberWrong)
                }
                else {
                  numberWrong++;
                  console.log(numberWrong);
                }

/////////////////////////////////2nd Question/////////////////////////////////////////////

                var answerTwo = $("input[name='son']:checked").val(); 
                    console.log(answerTwo);
                

                if  (answerTwo === "1" ) { //Took me an hour to figure out this needed to be a string!
                numberCorrect++;
                console.log(numberCorrect);
            }
                else if (! $("input[name='son']:checked") ) {
                    numberWrong++;
                    console.log(numberWrong)
                }
                else {
                  numberWrong++;
                  console.log(numberWrong);
                }


/////////////////////////////////////3rd Question//////////////////////////////////////////////
                var answerThree = $("input[name='nicknames']:checked").val(); 
                    console.log(answerThree);
                

                if  (answerThree === "1" ) { //Took me an hour to figure out this needed to be a string!
                numberCorrect++;
                console.log(numberCorrect);
            }
                else if (! $("input[name='nicknames']:checked") ) {
                    numberWrong++;
                    console.log(numberWrong)
                }
                else {
                  numberWrong++;
                  console.log(numberWrong);
                }

//////////////////////////////////////4th Question check////////////////////////////////////
                var answerFour = $("input[name='key']:checked").val(); 
                    console.log(answerFour);
                

                if  (answerFour === "1" ) { //Took me an hour to figure out this needed to be a string!
                numberCorrect++;
                console.log(numberCorrect);
            }
                else if (! $("input[name='key']:checked") ) {
                    numberWrong++;
                    console.log(numberWrong)
                }
                else {
                  numberWrong++;
                  console.log(numberWrong);
                }

///////////////////////////5th Question/////////////////////////////////////////////////////
                var answerFive = $("input[name='gray']:checked").val(); 
                    console.log(answerFive);
                

                if  (answerFive === "1" ) { //Took me an hour to figure out this needed to be a string!
                numberCorrect++;
                console.log(numberCorrect);
            }
                else if (! $("input[name='gray']:checked") ) {
                    numberWrong++;
                    console.log(numberWrong)
                }
                else {
                  numberWrong++;
                  console.log(numberWrong);
                }

                $( ".container" ).hide();
                var newDiv = $("<div>");
                $("div").text("You guessed " + numberCorrect + " correctly!   You guessed " + numberWrong + " incorrectly!");
                

            }); // closes input type submit .click function


        


// ///////////APPEND RESULTS TO PAGE WHEN SUBMIT BUTTON IS HIT////////////////////////////////







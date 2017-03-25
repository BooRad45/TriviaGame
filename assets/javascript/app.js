$(document).ready(function() {

    // var answerOne;
    // var answerTwo;
    // var answerThree;
    // var answerFour;
    // var answerFive;
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

//////////CONDITIONALS TO TEST FOR CORRECT AND INCORRECT ANSWERS ONCE TIMER IS DONE OR SUBMIT BUTTON IS HIT
     //EVENT HANDLER FOR SUBMIT BUTTON/////
                
                  $("input[type='submit']").click(function(){
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



                var answerTwo = $("input[name='son']:checked").val(); ///////////////2nd Question
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



                var answerThree = $("input[name='nicknames']:checked").val(); ///////////////3rd Question
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


                var answerFour = $("input[name='key']:checked").val(); ///////////////4th Question
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

                var answerFive = $("input[name='gray']:checked").val(); ///////////////5th Question
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

            });
        });


    //             var answerTwo = $("input[name='son']:checked").val(); //son
    //                 console.log(answerTwo);
                

    //             if  (answerTwo === 1 ) {
    //             numberCorrect++;
    //             console.log(numberCorrect);
    //         }
    //             else {
    //               numberWrong++;
    //               console.log(numberWrong);
    //             }

    //        var answerThree = $("input[name='nicknames']:checked").val(); //nicknames
    //                 console.log(answerThree);
                

    //             if  (answerThree === 1 ) {
    //             numberCorrect++;
    //             console.log(numberCorrect);
    //         }
    //             else {
    //               numberWrong++;
    //               console.log(numberWrong);
    //             } 

    //             var answerFour = $("input[name='key']:checked").val();
    //                 console.log(answerFour);
                

    //             if  (answerFour === 1 ) {
    //             numberCorrect++;
    //             console.log(numberCorrect);
    //         }
    //             else {
    //               numberWrong++;
    //               console.log(numberWrong);
    //             }

    //        var answerFive = $("input[name='gray']:checked").val();
    //                 console.log(answerFive);
                

    //             if  (answerFive === 1 ) {
    //             numberCorrect++;
    //             console.log(numberCorrect);
    //         }
    //             else {
    //               numberWrong++;
    //               console.log(numberWrong);
    //             }

    //         });

  

    // });





// ///////////APPEND RESULTS TO PAGE WHEN SUBMIT BUTTON IS HIT////////////////////////////////







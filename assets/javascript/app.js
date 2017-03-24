window.onload = function() {
//taken from StackOverflow
    function timer(time,update,complete) {
    var start = new Date().getTime();
    var interval = setInterval(function() {
        var now = time-(new Date().getTime()-start);
        if( now <= 0) {
            clearInterval(interval);
            complete();
        }
        else update(Math.floor(now/1000));
    },100); // the smaller this number, the more accurate the timer will be
}

timer(
    180000, // milliseconds
    function(timeleft) { // called every step to update the visible countdown
        document.getElementById('timer').innerHTML = timeleft+" second(s)";
    },
    function() { // what to do after
      $( "#timer" ).replaceWith( "<h2>Time is up!<h2>" );
    }
);

};

// $(document).ready(function(){
///////////EVENT HANDLER TO CHECK RADIO BUTTON VALUES WHEN SUBMIT BUTTON HIT///////////////////

// var userAnswers = $('.radio-inline input:radio:checked').val();
//    console.log(userAnswers);




//////////////SCAN FOR USER ANSWERS IN "WRONG" ARRAY////////////////////////////




///////////APPEND RESULTS TO PAGE WHEN SUBMIT BUTTON IS HIT////////////////////////////////





// };

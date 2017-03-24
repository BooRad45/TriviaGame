$(document).ready(function() {

var numberCorrect = 0;
var numberWrong = 0;


//taken from StackOverflow
    function timer(time,update,complete) {
    var start = new Date().getTime();
    var interval = setInterval(function() {
        var now = time-(new Date().getTime()-start);
        if( now <= 0) {
            clearInterval(interval);
            complete();
            // call function that is used by submit button as well???How????
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



////////////CONDITIONALS TO TEST FOR CORRECT AND INCORRECT ANSWERS ONCE TIMER IS DONE OR SUBMIT BUTTON IS HIT
$("#submit").click(function(){ //on submit button click (how to check timer up?)

if ($('input[name=heis]:checked').length > 0) {
    numberCorrect++;}
    else {
      numberWrong++;
    }

    if ($('input[name=cerPals]:checked').length > 0) {
    numberCorrect++; }
    else {
      numberWrong++;
    }

    if ($('input[name=bluesClue]:checked').length > 0) {
    numberCorrect++; }
    else {
      numberWrong++;

}
    if ($('input[name=methyl]:checked').length > 0) {
    numberCorrect++; }
    else {
      numberWrong++;

}

    if ($('input[name=grayMatter]:checked').length > 0) {
    numberCorrect++; }
    else {
      numberWrong++;

}

};





///////////APPEND RESULTS TO PAGE WHEN SUBMIT BUTTON IS HIT////////////////////////////////





// };

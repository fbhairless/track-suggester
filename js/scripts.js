
function Suggester(answer1, answer2, answer3, answer4, answer5) {
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.answer4 = answer4;
  this.answer5 = answer5;
  console.log (this.answer1, this.answer2, this.answer3, this.answer4, this.answer5);
}

Suggester.prototype.answerTotal= function(answer1, answer2, answer3, answer4, answer5) {
  var suggestedTrack = "test";
  var trackTotal = (answer1 + answer2 + answer3 + answer4 + answer5);
  console.log("answer, question 1 = " + answer1);
  console.log("answer, question 2 = " + answer2);
  console.log("answer, question 3 = " + answer3);
  console.log("answer, question 4 = " + answer4);
  console.log("answer, question 5 = " + answer5);
  console.log(" Track Total Value is: " + trackTotal);
  trackTotal = parseInt(trackTotal);
  console.log(" Track Total Value is: " + trackTotal);
  if (trackTotal > 0 && trackTotal <= 155) {
    suggestedTrack = "Suggested Track is Java/Android";
  } else if (trackTotal > 156 && trackTotal <= 166) {
      suggestedTrack = "Suggested Track is C#/.net";
    } else if (trackTotal > 166 && trackTotal <= 171) {
        suggestedTrack = "Suggested Track is Ruby/Rails";
      } else if (trackTotal > 171 && trackTotal <= 176) {
          suggestedTrack = "Suggested Track is PHP/Drupal";
        } else if (trackTotal > 176 && trackTotal <= 251) {
            suggestedTrack = "Suggested Track is CSS/Design";
          } else {
              suggestedTrack = "ERROR";
            }
  console.log("suggestedTrack = " + suggestedTrack);


//     if (condition1) {
//     block of code to be executed if condition1 is true
// } else if (condition2) {
//     block of code to be executed if the condition1 is false and condition2 is true
// } else {
//     block of code to be executed if the condition1 is false and condition2 is false
// }



  return suggestedTrack;


}

$(document).ready(function(){
  $("form#questions").submit(function(event){
    event.preventDefault();



    var answer1 = parseInt($('input[name="answer1"]:checked').val());
    var answer2 = parseInt($('input[name="answer2"]:checked').val());
    var answer3 = parseInt($('input[name="answer3"]:checked').val());
    var answer4 = parseInt($('input[name="answer4"]:checked').val());
    var answer5 = parseInt($('input[name="answer5"]:checked').val());



    var newSuggester = new Suggester(answer1, answer2, answer3, answer4, answer5);
    var suggestedTrack =  newSuggester.answerTotal(answer1, answer2, answer3, answer4, answer5);

      // console.log(" Suggested Track " + suggestedTrack);

    $(".suggestedTrack").append("<span>" + suggestedTrack + "</span>");

  });
});

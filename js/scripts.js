var sophia = fridaynight2 + print4 + sweater1 + drink1 + trip3;
var blanche = fridaynight1 + print1 + sweater3 + drink3 + trip2;
var dorothy = fridaynight4 + print3 + sweater3 + drink4 + trip1;
var rose = fridaynight2 + print2 + sweater2 + drink2 + trip4;
var jessica = fridaynight4 + print4 + sweater4 + drink4 + trip3;

$(document).ready(function() {

  var answer1 = $("input:radio[name=answer1]:checked").val();
  var answer2 = $("input:radio[name=answer2]:checked").val();
  var answer3 = $("input:radio[name=answer3]:checked").val();
  var answer4 = $("input:radio[name=answer4]:checked").val();
  var answer5 = $("input:radio[name=answer5]:checked").val();

	$("form#quiz").submit(function(event) {
		event.preventDefault();

    if (answer1 === "fridaynight2" && answer2 === "print4" && answer3 === "sweater1" && answer4 === "drink1" && answer5 === "trip3") {
      var result = "Sophia";
    } else if (answer1 === "fridaynight1" && answer2 === "print1" && answer3 === "sweater3" && answer4 === "drink3" && answer5 === "trip2") {
      var result = "Blanche";
    } else if (answer1 === "fridaynight4" && answer2 === "print3" && answer3 === "sweater3" && answer4 === "drink4" && answer5 === "trip1") {
      var result = "Dorothy";
    } else if (answer1 === "fridaynight2" && answer2 === "print2" && answer3 === "sweater2" && answer4 === "drink2" && answer5 === "trip4") {
      var result = "Rose";
    } else if (answer1 === "fridaynight4" && answer2 === "print4" && answer3 === "sweater4" && answer4 === "drink4" && answer5 === "trip3") {
      var result = "You're actually Jessica Fletcher from Murder, She Wrote!";
    }

		$("span.result").text(result);
    $(".result").show();

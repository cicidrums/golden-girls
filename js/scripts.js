
$(document).ready(function() {

	$("form#quiz").submit(function(event) {
		event.preventDefault();

		var answer1 = parseInt($("select#question1").val());
		var answer2 = parseInt($("select#question2").val());
		var answer3 = parseInt($("select#question3").val());
		var answer4 = parseInt($("select#question4").val());
		var answer5 = parseInt($("select#question5").val());

		var result = answer1 + answer2 + answer3 + answer4 + answer5;

		if (result <= 10) {
		  $("span#blanche").show();
		  $("span#dorothy, span#rose, span#sophia, span#jb").hide();
		} else if (result > 10 && result < 12) {
		  $("span#sophia").show();
		  $("span#rose, span#dorothy, span#jb, span#blanche").hide();
		} else if (result === 12) {
		  $("span#rose").show();
		  $("span#dorothy, span#blanche, span#sophia, span#jb").hide();
		} else if (result != 12 && result > 10 && result < 15) {
		  $("span#dorothy").show();
		  $("span#rose, span#sophia, span#jb, span#blanche").hide();
		} else {
		  $("span#jb").show();
		  $("span#sophia, span#blanche, span#dorothy, span#rose").hide();
		}

		$("span.result").text(result);
		$(".result").show();

	});
});

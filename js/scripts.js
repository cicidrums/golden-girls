
$(document).ready(function() {

	$("form#quiz").submit(function(event) {
		event.preventDefault();

		var sophia = 2 + 4 + 1 + 1 + 3; //11//
		var blanche = 1 + 1 + 3 + 3 + 2; //10//
		var dorothy = 4 + 3 + 3 + 4 + 1; //15//
		var rose = 2 + 2 + 2 + 2 + 4; //12//
		var jessica = 4 + 4 + 4 + 4 + 3; //19//
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

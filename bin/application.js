$(document).ready(function(){
	$(".dice_roll").hide();
	var dice_num = 0;
	$("#dice_form").submit(function(e){
		e.preventDefault();
		to_roll();
		dice_num = $("#dice_num").val();
		render_dice(dice_num);
	});

	$("#rolling").click(function(){
		roll_dice(dice_num);
	});

	$("#back").click(function(){
		to_set();
		remove_dices();
	});



	function to_roll(){
		$(".dice_set").hide();
		$(".dice_roll").show();
	}

	function to_set(){
		$(".dice_roll").hide();
		$(".dice_set").show();
	}

	function render_dice(dice_num){
		var i;
		for (i = dice_num; i > 0; i--) {
			var dice = document.createElement("div");
			dice.setAttribute("id", "dice_" + i);
			dice.setAttribute("class", "dice mg10");
			$(".dices_container").append(dice);

			var value = document.createElement("span");
			value.setAttribute("id", "dice_value_" + i);
			value.setAttribute("class", "dice_value");
			dice.append(value);
		}
	}

	function roll_dice(dice_num){
		var i, total=0;
		for (i = dice_num; i > 0; i--) {
			var value = get_random(6);
			total += value;
			$("#dice_value_" + i).text(value);
			console.log(value);
		}
		$("#result").text(total);
	}

	function get_random(max){
		return Math.floor(Math.random() * max) + 1;
	}

	function remove_dices(){
			var node = document.getElementById("container");
			while (node.hasChildNodes()) {
	    node.removeChild(node.lastChild);
		}
	}
});
$(document).ready(function() {
	var topham = Hammer($("#top"), {
		transform_always_block: true,
		tap_always: false,
		drag_min_distance: 0
	});
	topham.on("tap", function(event) {
		console.log("top");
	});

	var leftham = Hammer($("#left"), {
		transform_always_block: true,
		tap_always: false,
		drag_min_distance: 0
	});
	leftham.on("tap", function(event) {
		console.log("left");
	});

	var rightham = Hammer($("#right"), {
		transform_always_block: true,
		tap_always: false,
		drag_min_distance: 0
	});
	rightham.on("tap", function(event) {
		console.log("right");
	});

	var bottomham = Hammer($("#bottom"), {
		transform_always_block: true,
		tap_always: false,
		drag_min_distance: 0
	});
	bottomham.on("tap", function(event) {
		console.log("bottom");
	});
});
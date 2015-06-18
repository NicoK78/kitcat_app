(function($){

	var myElement = document.getElementById('carre');
	var mc = new Hammer(myElement);

	mc.on("swiperight", function(e){
		myElement.style.backgroundColor = 'green';
	});

	mc.on("tap", function(e){
		myElement.style.backgroundColor = 'black';
	});

	// var $carre = $('#carre');
	// $carre.hammer()
	// 	.on('swiperight', function(e){
	// 		console.log('test');
	// 	});

})(Zepto);
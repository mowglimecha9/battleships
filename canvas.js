var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

window.onload = function() {
	// Get a reference to the canvas object
	var canvas = document.getElementById('battleships');
	canvas.width = 700;
	canvas.height = 500;
	paper.setup(canvas);
	paper.install(window);
	var tool = new Tool();
		var path;

		// Define a mousedown and mousedrag handler
		tool.onMouseDown = function(event) {
			path = new Path();
			path.strokeColor = 'black';
			path.add(event.point);
		}

		tool.onMouseDrag = function(event) {
			path.add(event.point);
		}

		tool.onMouseUp = function(event) {
			path.closed = true;
			path.simplify();
		}
}
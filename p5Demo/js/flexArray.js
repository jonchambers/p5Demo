
var num = 20;

var x = [];

var y = [];


function setup(){
	createCanvas(windowWidth, windowHeight);


}


function draw(){
	background(0);
	noFill();
	stroke(255);
	strokeWeight(5);
	print(x);
	//go through teh arrays and inject
	//x and y position from arrays
	for(var i = 0; i < x.length; i++){
		ellipse(x[i], y[i], 60, 60);
		//check to see if mouse is over this object
		if(dist(mouseX, mouseY, this.x[i], this.y[i]) < 30){
			x.splice(i, 1);
			y.splice(i, 1); 
		}
	}

}

function mousePressed(){
	//mouse pressed adds to array
	// x.push(mouseX);
	// y.push(mouseY);
}


function keyPressed(){
	if((key == 'x')){
		// x.splice(0,1);
		// y.splice(0,1);

		x.push(random(windowWidth));
		y.push(random(windowHeight));
	} 
}





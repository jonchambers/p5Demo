//booleans can be either true or false
var squareBrushBool = false;

var ellipseBrushBool = false; 


var rectWidth;

function setup(){

	createCanvas(windowWidth, windowHeight);
	background(255);
	rectMode(CENTER);

}


function draw(){

	//check to see if the brushes booleans 
	//are flipped to true
	if(squareBrushBool == true){
		squareBrush();
	}

	if(ellipseBrushBool == true){
		ellipseBrush();
	}


}

//custom functions
function squareBrush(){
	rectWidth = dist(mouseX, mouseY, pmouseX, pmouseY);
	fill(random(255), random(255), random(255), 50);
	rect(mouseX, mouseY, rectWidth, rectWidth);
}

function ellipseBrush(){
	fill(120, 50, 100);
	ellipse(mouseX, mouseY, 80, 80);

}

function keyPressed(){
	//key presses flip booleans
	if(key === 'q'){
		squareBrushBool = true;
		ellipseBrushBool = false;
	}

	if(key === 'w'){
		squareBrushBool = false;
		ellipseBrushBool = true;
	}
}








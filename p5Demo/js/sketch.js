//creating a global variable
var mappedStrokeColor;

//image variable
var furby;
var counter = 0;
function preload(){

	//loading furby image int furby variable
	furby = loadImage("images/furby.png");

}

//stuff in setup runs one time
function setup() {

	createCanvas(windowWidth, windowHeight); 
	background(random(255), random(255), random(255));
	rectMode(CENTER);
	imageMode(CENTER);

	for(var i = 1; i < 150; i++){
		noStroke();
		fill(random(255), random(255), random(255));
		ellipse(random(windowWidth), random(windowHeight), i*4, 50);

	}

}


//stuff in draw runs in a loop
function draw() {

	for(var i = 0; i < windowHeight; i++){
		line(0, i*40, windowWidth, i*40);

	}

	for(var i = 0; i < windowWidth; i++){
		line(i*40, 0, i*40, windowHeight);

	}
	//setting this variable 
	mappedStrokeColor = map(mouseX, 0, windowWidth, 0, 255);
	
	//background(181, 251, 169);
	smooth();

	//fill changes teh color of shapes
	fill(200, 100, 100);

	//changes the color of the outlines and lines
	stroke(mappedStrokeColor, 130, 200);	
	
	//changes thickness of stroke
	strokeWeight(10);

	//line expects x1, y1, x2, y2
	line(0, 0, windowWidth, windowHeight);

	//ellipse expects x,y,width,height
	ellipse(300, 300, 100, random(100, 600));

	//rotating and translating things need to be in their own
	//push() and pop() otherwise they'll 
	//rotate and translate everything
	push();
	counter++;
	//translate(mouseX, mouseY);
	rotate(radians(mouseX));
	//rect is expects x, y, width, height
	rect(200, 500, 500, 300);
	pop();


	push();
	fill(20, 100, 220, 100);
	stroke(30, 200, 200);
	ellipse(mouseX, mouseY, 100, 100);
	pop();

	//triangle expects x1, y1, x2, y2, x3, y3
	triangle(600, 50, 800, 100, windowWidth, windowHeight);

	noCursor();
	//display image
	image(furby, mouseX, mouseY, 50, 50);
	
}

function mouseDragged(){ 
	line(mouseX, mouseY, pmouseX, pmouseY);
}


function windowResized(){
	//resises the canvas on resize event 
	resizeCanvas(windowWidth, windowHeight);
	background(181, 251, 169);

	//print() prints to the console
	print(windowWidth);
}
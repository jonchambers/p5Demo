
var r;

var g; 

var b;

//image variable
var furby;

function preload(){

	//loading furby image int furby variable
	furby = loadImage("images/furby.png");

}

function setup(){
	createCanvas(windowWidth, windowHeight);
	r = random(0,255);
	g = random(0,255);
	b = random(0,255);
	background(255); 
	strokeWeight(10);
}



function draw(){

	
	stroke(r, g, b);

	if(mouseIsPressed){
		fill(30, 100, 200);
	} else {
		fill(255, 0 ,0);
	}
	ellipse(300, 500, 40, 40);

}


function mouseDragged(){

	line(mouseX, mouseY, pmouseX, pmouseY);
}

function mouseReleased(){
	strokeWeight(random(5, 30));
	r = random(0,255);
	g = random(0,255);
	b = random(0,255);

	image(furby, random(windowWidth), random(windowHeight), 60, 60);
}

function keyPressed(){
	if(key === 's'){
		save('furby.png')
	}
}



function windowResized(){
	//resises the canvas on resize event 
	resizeCanvas(windowWidth, windowHeight);
	
}


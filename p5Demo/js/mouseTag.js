//ball x, y position

var ballX;
var ballY;

//ball speed 
var ballXSpeed;
var ballYSpeed;


//variable to check for mouse collision
var mouseCollide;

//score variable 
var score = 0;

//game booleans
startBool = true;
gameBool = false;
winBool = false;
loseBool = false; 

//timer variable
var timer = 20;

function setup(){
	createCanvas(windowWidth, windowHeight);

	//generating random ball position
	ballX = random(15, windowWidth-15);
	ballY = random(15, windowHeight-15);

	//set the speed variables.
	ballXSpeed = 2;
	ballYSpeed = 2;

	fill(random(255), random(255), random(255));
}


function draw(){
 	if(startBool == true){
 		startScreen();
 	}
 	if(gameBool == true){
 		game();
 	}
 	if(winBool == true){
 		win();
 	}
 	if(loseBool == true){
 		lose();
 	}
 	

}

function startScreen(){
	background(0);
	fill(255); 
	textAlign(CENTER);
	textSize(30);
	text("Press Button To Start", windowWidth/2, 200);

	var buttonX = windowWidth/2;
	var buttonY = windowHeight/2;

	ellipse(buttonX, buttonY, 50, 50);
	//check to see of mouse is over button and mouse is pressed
	//if so, flip booleans
	if(dist(mouseX, mouseY, buttonX, buttonY) < 25 && mouseIsPressed){
		startBool = false;
		gameBool = true;
	}

}

function game(){

	//modulo check remainder
	//frameRate is 60, 60 goes into 60 evenly with a remainder of 0
	if(frameCount % 60 == 0 && timer >0){
		timer --;
	}
	background(200);
	textSize(40);
	textAlign(LEFT);
	text("Score: " + score + "00", 10, 50);
	text("Time: " + timer, 10, 90);
	//updating ball x, y, position every frame
	ballX = ballX + ballXSpeed;
	ballY = ballY + ballYSpeed; 
	
	for(var i=0; i < 500; i++){
		ellipse(random(windowWidth), random(windowHeight), 30, 30);
	}
	ellipse(ballX, ballY, 30, 30);

	//check to see if ball has reached edge of screen
	if(ballX >= windowWidth - 15 || ballX <= 15){
		//reverse speed
		fill(random(255), random(255), random(255));
		ballXSpeed = ballXSpeed * -1;
	}

	if(ballY >= windowHeight -15 || ballY <= 15){
		fill(random(255), random(255), random(255));
		ballYSpeed = ballYSpeed * -1;
	}

	//calculate distance between mouse and ball
	mouseCollide = dist(mouseX, mouseY, ballX, ballY);

	if(mouseCollide <= 15 ){
		ballX = random(15, windowWidth-15);
		ballY = random(15, windowHeight-15);
		ballXSpeed = ballXSpeed * 1.2;
		ballYSpeed = ballYSpeed * 1.2;
		fill(random(255), random(255), random(255));
		score++;
	}

	if(score == 10){
		gameBool = false;
		winBool = true;
	}

	if(timer == 0){
		gameBool = false;
		loseBool = true;
	}

}

function win(){
	background(0);
	textSize(40);
	textAlign(CENTER);
	text("You Win!!!", windowWidth/2, 50);
}

function lose(){
	background(0);
	textSize(40);
	textAlign(CENTER);
	text("You Lose!!!", windowWidth/2, 50);
	text("Press any key to play again", windowWidth/2, 100);

	if(keyIsPressed){
		loseBool= false;
		gameBool = true;
		score = 0;
		timer = 20;
	}
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}






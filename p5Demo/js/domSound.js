
var canvas; 

var baby; 

var modem;

var button;

var slider;

var babyX = 400;
var babyY;

function preload(){
	modem = loadSound("audio/ModemSound.mp3");
}

function setup(){

	canvas = createCanvas(windowWidth, windowHeight);
	canvas.style('z-index', '-1');
	canvas.position(0,0);

	background(200);

	button = createButton("play modem");
	button.mousePressed(playToggle);

	slider = createSlider(0, 3, 1, 0.01);
	baby = createImg("images/dancingbaby2.gif");
	//baby.position(babyX, 400);

	//set volume of sound
	modem.setVolume(0.5);
	//modem.play();
}

function playToggle(){

	if(!modem.isPlaying()){
		modem.play();
		button.html("pause modem");
	}else{
		modem.pause();
		button.html("play modem");
	}

}



function draw(){
	baby.position(babyX, 400);

	modem.rate(slider.value());
	
	babyX = babyX + 2;
	if (babyX > windowWidth+100){
		babyX = -100;
	}
}





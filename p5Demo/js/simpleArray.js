
var nums = [25, 36, 49, 64, 82, 100];

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0);
	//print out position 2 in the array
	print(nums[2]);

	//prints out the length
	print(nums.length);
	for(var i = 0; i<nums.length; i++){
		var posX = random(100, windowWidth-100);
		var posY = random(100, windowHeight-100);

		fill(244, 66, 200);
		ellipse(posX, posY, nums[i], nums[i]);
	}
}


function draw(){
	

}
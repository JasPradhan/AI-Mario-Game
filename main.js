function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_collectcoin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video=createCapture(VIDEO);
	video.parent('game_console');
	video.size(800,400);
	instializeInSetup(mario);
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function modelLoaded(){
	console.log("poseNet is initialized");
}

function draw() {
	game()
}

function gotPoses(results){
	if(results.length>0){
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}
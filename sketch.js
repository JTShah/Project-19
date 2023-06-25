//variables
var run, run_img, jump, jump_img
var dragon, dragon_img
var bg, bg_img


// The Great 3 Functions
function preload(){
    run_img=loadAnimation("Run1","Run2","Run3","Run4","Run5","Run6");
    jump_img=loadAnimation("Jump1","Jump2","Jump3","Jump4","Jump5","Jump6","Jump7","Jump8");
    bg_img=loadImage("background_png")
}

function setup() {
    createCanvas(1024,405);
    bg=createSprite(512,202.5);
    bg.addImage("Background",bg_img);
    bg.velocityX=1.5

}

function draw() {
 
}
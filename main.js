function preload(){

}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}                                                                                                                                       


function draw(){
image(video,0,0,300,300);
}

function take_snapshot(){
    save('https://roughandtumblegentleman.com/wp-content/uploads/2019/04/A-Mustache-Looks-Like-a-Big-Hairy-Smile.png');                                                                                                                                                                                     
}

function modelLoaded(){
console.log("model has loaded");
    
}


function gotPoses(results){
if(results.length>0){

console.log(results);
console.log("nose x= "+results[0].pose.nose.x);
console.log("nose y= "+results[0].pose.nose.y);
}
}


function draw() {
    image(video, 0, 0,500,500);
    fill(255,0,0);
    stroke(255,0,0);
    circle(mustacheX,mustacheY,20);
    image(mustache_nose,mustacheX,mustacheY,30,30);
}
function take_snapshot() {
    save('myFilterImage.png');
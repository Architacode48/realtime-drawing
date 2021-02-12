noseX=0;
noseY=0;
rwristX=0;
lwristX=0;
difference=0;
function setup(){
    canvas=createCanvas(550,450);
    canvas.position(690,100);
    video=createCapture(VIDEO);
    video.size(550,450);
    video.position(100,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){
    background("#ffd700");
    stroke("#3cb371");
    fill("#3cb371");
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log("model has loaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    rwristX=results[0].pose.rightWrist.x;
    lwristX=results[0].pose.leftWrist.x;
    difference=floor(rwristX-lwristX);
    console.log("nosex= "+noseX+"nosey= "+noseY);
    console.log("rwristX= "+rwristX+"lwristX= "+lwristX+"difference= "+difference);

}
}

nosex=0;
nosey=0;
function setup(){
c1= createCanvas(500,400);
c1.center()
v1=createCapture(VIDEO)
v1.hide()
pn=ml5.poseNet(v1,modelLoaded)
pn.on('pose',gotPoses)



}
function draw(){
image (v1,0,0,500,400)
image (m,nosex,nosey,70,50)



}
function modelLoaded(){
console.log("My model is working")
}
function gotPoses(results){
if(results.length>0)
{
console.log (results)
nosex=results[0].pose.nose.x-120;
nosey=results[0].pose.nose.y-50;


}


}
function takephoto(){
save('joker.png');





}
m="";
function preload(){

m=loadImage("https://i.postimg.cc/59TpvmNc/Mustach.png")


}
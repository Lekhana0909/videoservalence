objects=[];
function setup(){
    canvas= createCanvas(430, 300);
    canvas.position(530,245);

    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 430, 300);
    if (status !=""){
    objectDetector.detect(video, gotResult);
    for (i=0; i<objects.length;i++){
        input=document.getElementById("finder").value;
        if (objects[i].label==input){
            document.getElementById("number_of_objects").innerHTML="Found";
        }
        else{
            document.getElementById("number_of_objects").innerHTML="Not Found";
        }
    }
}
}
function start(){
    objectDetector= ml5.objectDetector('cocosd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detected ";
}
function modelLoaded(){
    console.log("model loaded");
    status= true;
    video.volume(0);
}
function gotResult(error, results){
if (error){
    console.log(error);
}
console.log(results);
objects=results;
}
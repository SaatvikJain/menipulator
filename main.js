//function setup code
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    //canvas code
    canvas = createCanvas(550,415);
    canvas.position(560,100);
    //code for posnet
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
// fuction draw code
 function draw()
 {
     background('#6C91C2');

    // document.getElementById("square_side").innerHTML = " font size of the text will be = " + difference +"px";
     textSize(difference);
     fill('#FFE787');
     text('Saatvik', 50,400);

 }

//Function modelloaded
 function modelLoaded()
 {
    console.log('PoseNet Is Initialized');
 }
 //X & Y coardinates
   nosex= 0;
   nosey= 0;
   difference= 0;
   rightx= 0;
   leftx= 0;

 //function gotposes
  function gotPoses(results)
  {
      if(results.length > 0)
      {
          console.log(results);
          leftx= results[0].pose.leftWrist.x;
          rightx= results[0].pose.rightWrist.x;
          difference= floor (leftx - rightx);
          
      }
  }
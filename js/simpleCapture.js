
let capture;
let canvas;
let t1000;
let playButton;
let playing = false;

function setup(){
canvas = createCanvas(windowWidth, windowHeight)
canvas.position(0, 0)
capture = createCapture(VIDEO);
capture.size(320, 240);
capture.hide();

t1000 = createVideo(['video/T1000Reforming.mp4']);
t1000.position(150, 200);

 playButton = createButton('play');
 playButton.mousePressed(toggleVid);
 playButton.position(10, 35);


}

function toggleVid(){
  if(playing){
    t1000.pause();
    playButton('play')
  }else{
    t1000.loop();
    playButton.html('pause')
    print(t1000.duration());
  }
  playing = !playing;
}


function draw(){

  background(255);

  if(frameCount % 180 == 0){
      t1000.time(random(t1000.duration()));
  }
  image(capture, 0, 0)
}

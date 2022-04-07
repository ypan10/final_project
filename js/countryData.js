let canvas;
let table;

// let date;
// let events;
// let countries;
// let location;
// let memory;
// let activity;
// let comments;

let s = 'During the 14 days, I used the sleeping monitor to collect my sleeping data and there are something interesting happening in my dream.';

let dreamData = [];

let imageArray = [];

function preload(){
  table = loadTable('js/YinanPanDataCollection.csv', 'csv', 'header');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  background(244, 230, 186);
  for (var x = 0; x < width; x += width / 50) {
    for (var y = 0; y < height; y += height / 30) {
      stroke(125, 165, 188);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
//  imageMode(CENTER);
  textAlign(CENTER);

  for(let i = 0; i < table.getRowCount(); i++){

    date = table.getString(i, 'Date');

    //
    events = table.getString(i, 'Events');
    //
    countries = table.getString(i, 'Countries');
    //
    location = table.getString(i, 'Location');
    //
     memory = table.getString(i, 'Memory');
    //
    // activity = table.getString(i, 'activity');
    //
    // comments = table.getString(i, 'comments');
    //loading the image array
    imageArray[i] = loadImage('images/photos' + table.getString(i, 'Images'));

    //adding an image to the object
    dreamData.push(new DreamData(date, events, countries, location, memory, imageArray[i]));
  }
  for (let i = 0; i < dreamData.length; i++){
    dreamData[i].show();
  }
  //top banner rectangle
  //big rectangle
  fill(122,201,67);
  rect(306, 87, 835, 135);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  rect(287, 70, 835, 130);

  //small rectangle
  noStroke();
  fill(0, 169, 157);
  rect(432, 63, 300, 50);
  stroke(0);
  strokeWeight(1.5);
  fill(255, 161, 204);
  rect(432, 50, 289, 50);

  //smily face
  fill(241, 90, 36);
  rect(287, 70, 145, 130);
  fill(249, 180, 88);
  circle(360, 135, 120);

  //title text
  noStroke();
  fill(255);
  textSize(30);
  text('My Sleeping Note', 570, 85);

  //paragraph text
  noStroke()
  textAlign(LEFT);
  fill(0);
  textSize(14);
  text(s, 454, 140, 530, 200);

  //Date text
  noStroke();
  fill(0);
  textSize(18);
  text('2021.02.25 ~ 2021.03.10', 750, 94);

  //Data box
  noStroke();
  fill(255, 123, 172);
  rect(725, 259, 415, 340);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  rect(719, 259, 400, 326);

  //illustration
  noStroke();
  fill(0, 113, 188);
  rect(310, 273, 326, 326);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  rect(294, 259, 326, 326);

}


class DreamData{
  constructor(date, events, countries, location, memory,image){
    this.date = date;
    this.events = events;
    this.countries = countries;
    this.location = location;
    this.memory = memory;
    this.image = image;

    this.button = createButton(this.date)
    for(let i = -1; i < dreamData.length; i++){
      this.button.position(1150, i*25+160);
    }
    this.button.style('z-index', '1');
  }

  show(){
    this.button.mousePressed(() => this.update())
  }

  update(){

    //we didn't need to redraw the other boxes because they weren't being updated.
    //the illustration and data boxes do becasue text is being drawn again
    //illustration
    noStroke();
    fill(0, 113, 188);
    rect(310, 273, 326, 326);
    stroke(0);
    strokeWeight(1.5);
    fill(255);
    rect(294, 259, 326, 326);

    //Data box
    noStroke();
    fill(255, 123, 172);
    rect(725, 259, 415, 340);
    stroke(0);
    strokeWeight(1.5);
    fill(255);
    rect(719, 259, 400, 326);

    print("update");


    //
    // //this is where you create your interface and swap out
    // //the data for each dream entry.
    fill(0);
    noStroke();
    textSize(18);
    textAlign(LEFT);

    text('events: ' + this.events, 730, 300 );
    text('color: ' + this.countries, 730, 330)
    text('voice: ' + this.location, 730, 360);
    text('object: ' + this.memory, 730, 390);
    image(this.image, 294, 259, 326, 326);
  }
}

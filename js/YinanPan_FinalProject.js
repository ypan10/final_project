let canvas;
let table;
let background_image
let logo

let usaButton;
let buttons;


let memoryData = [];

let imageArray = [];

function preload(){
  table = loadTable('js/YinanPanDataCollection.csv', 'csv', 'header');
  background_image = loadImage('photos/44.png');
  logo = loadImage('photos/Logo.png');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "-1");
  background(0, 0, 0)
  image(background_image, 0, 0, windowWidth, windowHeight)


  //create the country buttons and trigger different
  //functions to display the different country data
    chinaButton = createButton('China')
    usaButton = createButton('USA')
  usaButton.addClass('usaButton')
  chinaButton.addClass('chinaButton')

    chinaButton.mousePressed(chinaLocations)
    usaButton.mousePressed(usaLocations);


  textAlign(CENTER);

  //top banner rectangle
  //big rectangle
  fill(9, 16, 34);
  rect(270, 56, 873, 145);
  stroke(9, 16, 34);
  strokeWeight(5);
  fill(32,38,48);
  rect(287, 70, 839, 116)



  //title text
  noStroke();
  fill(6,195,131);
  textSize(70);
  text('My Merrories Blog', 750, 153);


  //Data box
  noStroke();
  fill(6, 193, 195);
  rect(880, 218, 391, 540);
  stroke(32,38,48);
  strokeWeight(10);
  fill(255);
  rect(900, 240, 350, 498);


  //photos box
  noStroke();
  fill(6,195,131);
  rect(255, 208, 625, 560);
  noStroke();
  fill(32,38,48);
  rect(265, 217, 605, 540);
  stroke(0);
  strokeWeight(1.5);
  fill(255);
  rect(287, 240, 560, 498);

  noStroke();
  fill(6,195,131);
  rect(271, 57, 18, 75);
  fill(6,195,131);
  rect(271, 57, 165, 16);
  fill(6,195,131);
  rect(977, 184, 165, 16);
  fill(6,195,131);
  rect(1124, 135, 18, 50);


  fill(6,195,131);
  rect(439, 57, 16, 16);
  fill(6,195,131);
  rect(458, 57, 13, 16);
  fill(6,195,131);
  rect(474, 57, 10, 16);
  fill(6,195,131);
  rect(487, 57, 7, 16);
  fill(6,195,131);
  rect(497, 57, 4, 16);
  fill(6,195,131);
  rect(504, 57, 3, 16);
  fill(6,195,131);
  rect(510, 57, 1, 16);
  fill(6,195,131);
  rect(514, 57, 1, 16);
  fill(6,195,131);
  rect(518, 57, 1, 16);


  fill(6,195,131);
  rect(958, 184, 16, 16);
  fill(6,195,131);
  rect(942, 184, 13, 16);
  fill(6,195,131);
  rect(929, 184, 10, 16);
  fill(6,195,131);
  rect(919, 184, 7, 16);
  fill(6,195,131);
  rect(912, 184, 4, 16);
  fill(6,195,131);
  rect(906, 184, 3, 16);
  fill(6,195,131);
  rect(902, 184, 1, 16);
  fill(6,195,131);
  rect(898, 184, 1, 16);
  fill(6,195,131);
  rect(894, 184, 1, 16);

  image(logo, 300, 74, 120, 110)
}


function chinaLocations(){

  //empty the locations data object array
  memoryData.splice(0,memoryData.length);

  //get all the buttons with class locationButtons and delete them
  //so that we start over with new buttons everytime we change countries
  buttons = document.getElementsByClassName('locationButtons');
  print(buttons.length);
  while(buttons.length > 0){
      buttons[0].parentNode.removeChild(buttons[0]);
  }


  //create new data and buttons for China
  for(let i = 0; i < table.getRowCount(); i++){
    if(table.getString(i, 'Countries') == 'China'){
      date = table.getString(i, 'Date');


      events = table.getString(i, 'Events');

      countries = table.getString(i, 'Countries');

      memoryLocation = table.getString(i, 'Location');

      memory = table.getString(i, 'Memory');

      imageArray[i] = loadImage('photos/' + table.getString(i, 'Images'));


      memoryData.push(new MemoryData(date, events, countries, memoryLocation, memory, imageArray[i]));
    }
  }

  for (let i = 0; i < memoryData.length; i++){
    memoryData[i].show();
  }
}

function usaLocations(){

  //empty the locations data object array
  memoryData.splice(0,memoryData.length);

  //get all the buttons with class locationButtons and delete them
  //so that we start over with new buttons everytime we change countries
   buttons = document.getElementsByClassName('locationButtons');
    print(buttons.length);
    while(buttons.length > 0){
        buttons[0].parentNode.removeChild(buttons[0]);
    }

  //create new data and buttons for USA
  for(let i = 0; i < table.getRowCount(); i++){
    if(table.getString(i, 'Countries') == 'USA'){
      date = table.getString(i, 'Date');


      events = table.getString(i, 'Events');

      countries = table.getString(i, 'Countries');

       memoryLocation = table.getString(i, 'Location');

        memory = table.getString(i, 'Memory');

       imageArray[i] = loadImage('photos/' + table.getString(i, 'Images'));


      memoryData.push(new MemoryData(date, events, countries, memoryLocation, memory, imageArray[i]));
    }
  }

  for (let i = 0; i < memoryData.length; i++){
    memoryData[i].show();
  }


}

class MemoryData{
  constructor(date, events, countries, memoryLocation, memory, image){
    this.date = date;
     this.events = events;
     this.countries = countries;
     this.memoryLocation = memoryLocation;
     this.memory = memory;
     this.image = image;

    this.button = createButton(this.date)

    //add the locationButtons class to the buttons
    this.button.addClass('locationButtons');

    for(let i = -1; i < memoryData.length; i++){
      this.button.position(20, i*60+220);
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
    stroke(0);
    strokeWeight(1.5);
    fill(255);
    rect(900, 240, 350, 498);

    print("update");


    //
    // //this is where you create your interface and swap out
    // //the data for each dream entry.
    fill(0);
    noStroke();
    textSize(20);
    textAlign(LEFT);

     text('Events: ' + this.events, 925, 320);
     text('Countries: ' + this.countries, 925, 360)
     text('Location: ' + this.memoryLocation, 925, 400, 300, 300);
     text('Memory: ' + this.memory, 925, 480, 300, 800);
    image(this.image, 287, 240, 560, 498);
  }
}

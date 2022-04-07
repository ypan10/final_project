let table;
let companyMenu;
let canvas
let imageArray = [];

function preload() {

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('js/personalData.csv', 'csv', 'header');

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style("z-index", "-1")
  background(0);
  fill(255)


  companyMenu = createSelect();
  companyMenu.option('Select Company')
  submitButton = createButton('Submit');

  //cycle through the table rows
  for (let i = 0; i < table.getRowCount(); i++){
    imageArray[i] = loadImage("images/" + table.getString(i, 'image'));
    //grab each of the dates
    let date = table.getString(i, 'date');
    let company = table.getString(i, 'company');
    let frequency = table.getNum(i, 'frequency');
    //print dates to the console
    //print(date)
    companyMenu.option(company)
    //print dates on the screen
    //text(date, 50, (i*40)+40)
    //text(company, 100, (i*40)+40)
    //text(frequency, 180, (i*40)+40)

    //ellipse( 550,(i*40)+40, frequency, frequency)
  }
print(imageArray)
  //trigger the changeData function when
  //menu is changeData
  //companyMenu.changed();
  submitButton.mousePressed(changeData);
}

function changeData(){
  background(0);
  textSize(30)
  textAlign(CENTER)
  imageMode(CENTER);
  for (let i = 0; i < table.getRowCount(); i++){
    if(companyMenu.value() == table.getString(i, 'company')){
      text(table.getString(i, 'company'), windowWidth/2, 50);
      text(table.getString(i, 'date'), windowWidth/2, 90);
      text(table.getString(i, 'location'), windowWidth/2, 130);
      text(table.getString(i, 'service'), windowWidth/2, 170);
      text(table.getString(i, 'frequency'), windowWidth/2, 200);
      for (let j = 0; j < table.getString(i, 'frequency'); j++){
        image(imageArray[i], random(windowWidth), random(windowWidth), 30, 30)
      }
    }
  }
}

function draw(){

}

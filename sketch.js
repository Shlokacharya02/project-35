//Create variables here
var dog,happyDog,dogImg,happyDogImg,database,foodS,foodStock;


function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(300,300,10,10);
  dog.scale = 0.2;
  dog.addImage(dogImg);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() { 
  background(46,139,87);
  
  
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);


  }

  drawSprites();
  //add styles here

  textSize(10);
  fill("black");
  text("Press UP_ARROW Key to feed the milk",170,200);
  text("Food remaining" + foodS,130,300);
 



}

function readStock(data){


  foodS = data.val();
}

function writeStock(x){


  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

database.ref('/').update({
Food: x

})

}




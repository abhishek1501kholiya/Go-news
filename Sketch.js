var canvas;
var rect;
var form;
var bg;
var value;
var users = [];
var gameState = "display";
var didbutton;
var statement1;
var bubbles = [];
var display;
var question1;
var answer1;
var database;
var user;
var question2;
var userCount = 0;
var explore;
var exploreimg;
var Explorehtml  ;
var back;
var More1;
var Morehtml;
var morebg;
var viewPost;
function preload(){
bg = loadImage("images/homenew.jpeg");
 exploreimg = loadImage("images/features.jpg");
 morebg = loadImage('images/More.jpg')
}
function setup (){

canvas = createCanvas(800,800);

database = firebase.database();
form = new Form();
question1 = new Question("what is global warming and what are its causes ?");
answer1 = new Answer();
user = new User();

 didbutton = new Button('did you know',150,750,"didyou");
question2 = new question();
Explorehtml = new  Explore(" Let's Explore How  technology is helping us to make our environment clean");
back = new Button('Back',150,750,'back1');
More1 = new Button('More',550,750,'More');
viewPost = new Button('View Post',650,750,'Post');
Morehtml = new More('feedback','Dear user ');
}
function draw(){
background(bg);
fill("white");
 
 form.display();
 if(gameState === "didyou"){
     rect(50,200,700,80);
    back.display();
    back.show();
    question1.display();   
 question1.show();
 question2.display();
 question2.show();
 rect(50,350,700,80)
 answer1.hide();

 }
if(gameState === "question"){
 
 answer1.display();
 answer1.show();
 question2.hide();



}

//if(gameState ==="question2"){
 //    question2.hide();
//}
if(gameState === "did2"){
    gameState = "home";
    form.show(); 
    didbutton.show();
 //    answer1.hide();
}
if(gameState === "explore"){
  background(exploreimg);
    // form.hide();
     question1.hide();
     question2.hide();
     Explorehtml.display();
     Explorehtml.show();
     back.display();
     back.show();
    //var image = loadImage("images/download(2).png");
 
}
if(gameState === "back1"){
    form.display();
    form.show();

    Explorehtml.hide();
    question1.hide();
    question2.hide();

    didbutton.display();
    didbutton.show();
    explore.display();
    explore.show();
    More1.display();
    More1.show();
    viewPost.display();
    viewPost.show();
}
if(gameState === 'More'){
    background(morebg);
    back.display();
    back.show();
}
if(gameState === "Post"){
    didbutton.hide();
    back.display();
    back.show();
}
drawSprites()

}
console.log(gameState);
//every thing about questions in did gameState

// about the answer of 1 question

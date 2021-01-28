var gameState, contestantCount;
var database, quiz, question, contestant;

function setup(){
  createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();

  quiz.getState();
  quiz.start();

}


function draw(){
  background(4, 80, 95);

  
}

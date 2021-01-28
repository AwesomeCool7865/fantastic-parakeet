class Question{
    constructor(){
    this.title = createElement('h1')    
    this.input = createInput("Name");
    this.input2 = createInput('Answer');
    this.question = createElement('h2');

    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  display(){
    fill("white")
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What has holes but can still hold water?")
    this.question.position(150, 80)

    this.option1.html("1: Lake");
    this.option1.position(150, 100);
    this.option2.html("2: Sponge");
    this.option2.position(150, 120);
    this.option3.html("3: Resovoir");
    this.option3.position(150, 140);
    this.option4.html("1: Soil");
    this.option4.position(150, 160);
 }

}
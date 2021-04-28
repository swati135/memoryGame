var Play, element1=[];
var word = [], rand;
console.log(words.length)
var second
var userInput1 =[]
var answers=[]


function setup() {
    createCanvas(1200,800);
  
    rand = Math.round(random(0,words.length))
    console.log(rand)

    console.log(words[rand])
    Play = createButton("Play")
    Play.position(100,100)
    
}
function draw() {
 
        background(0,0,0);

        Play.mousePressed(chooseWord);
        for(var i = 0; i<word.length; i++){
            fill("white")
            textSize(15)
            element1[i].html(word[i])
            element1[i].position(200, 20+(20*i))

            if(seconds ===time(4)){
              element[i].hide()
            }
        }
  
        if(answers === word){
          text("the entered words are correct", 300,100)
        }
}

function chooseWord(){
      console.log("inside if")

      
      rand = Math.round(random(0,words.length))
      console.log(rand)

      console.log(words[rand]) //getting a random value from the database
      word.push(words[rand]) // pushing it into an array called word, to keep the track of the words in memory game
      console.log(word) // checking if the words are getting pushed into the word array or not
      
      for(var j =0; j<word.length; j++){
          element1[j] = createElement("h3")
          element1[j].style('color', '#00a1d3');
          element1[j].position(100,20+(20*j))
          //element1[j].html("hi")

          userInput1[j] = createInput("")

          answers[j] = userInput1[j].value()
          //word.push(answers[j])
          userInput1[j].position(300,20+(20*j))
          console.log(answers)


      }


}


/*tasks:

  - checking how to enter the input and get its value into the "word array"
  - logic to check whether the words inside the word arrays were same or not
  - designing of the levels
  - designing for the details about the game
  - displaying the rules in the canvas



  */





//[1,2,3,4]    





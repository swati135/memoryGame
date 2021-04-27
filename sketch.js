var Play, element1;
var word = [], rand;
console.log(words.length)


function setup() {
  createCanvas(1200,800);
  
 rand = Math.round(random(0,words.length))
console.log(rand)

console.log(words[rand])
Play = createButton("Play")
Play.position(100,100)

element1 = createElement("h3")
element1.html("hi")
element1.style('color', '#00a1d3');
element1.position(100,20)


}

function draw() {
 
  background(0,0,0);

  Play.mousePressed(chooseWord);
  for(var i = 0; i<word.length; i++){
    fill("white")
    textSize(15)
    element1.html(word[i])
    element1.position(200, 20)
  }
  
  
}

function chooseWord(){
  console.log("inside if")
  rand = Math.round(random(0,words.length))
  console.log(rand)

  console.log(words[rand]) 
  word.push(words[rand])
  console.log(word)
  


}






//[1,2,3,4]    





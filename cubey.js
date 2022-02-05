function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(255,255,255);
}

let z = 0;
let y = 0;
let x = 0;

goingBack = false;
goingForward = false; 

//translate in relation to the last object that was created
function draw() { 

    //makes the box look like an actual cube
    rotateX(100);
    rotateY(100);

    fill('red');
    noStroke();
    translate(x,y,z);
    box(25);

    //trans = trans + 25;

    // translate(0,0,25);
    // box(25);

    // translate(0,25);
    // box(25);

}

function keyPressed() { 
    if (keyCode == DELETE || keyCode == BACKSPACE){
      background(255,255,255);
    }

    if (keyCode === 83){ // S key
        z = z + 25;
    }

    if (keyCode === 87){ // W key
        y = y + 25;
    }

  }
function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
}

let z = 0;
let y = 0;
let x = 0;

//translate in relation to the last object that was created
function draw() { 

    //makes the box look like an actual cube
    rotateX(100);
    rotateY(100);

    fill('red');
    noStroke();
    translate(x,y,z);
    box(25);

}

function keyPressed() { 
    if (keyCode == DELETE || keyCode == BACKSPACE){
      background(255,255,255);
    }

    if (keyCode === 81){ // Q key goes forward on the Z axis
        z = z + 25;
    }

    if (keyCode === 69){ // E key goes backward in the Z axis
        z = z - 25;
    }

    if (keyCode === 87){ // W key goes upwards in the Y axis
        y = y - 25;
    }

    if (keyCode === 83){ // S key goes down in the Y axis
        y = y + 25;
    }

    if (keyCode === 65){ // A key goes left on the X axis
        x = x - 25;
    }

    if (keyCode === 68){ // D key goes right on the X axis
        x = x + 25;
    }
     

  }
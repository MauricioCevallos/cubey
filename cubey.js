
function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    window.postMessage('hi');
    
} 

// TODO RERENDER 3D Objects in list
// push each cube to a list and re render each loop with new background 
// to simulate 3d space 

let z = 0;
let y = 0;
let x = 0;
let turbo = false;

//let cubies = [];

//translate in relation to the last object that was created
function draw() { 
    //makes the box look like an actual cube
    rotateX(100);
    rotateY(100);
    fill(random(255),random(255),random(255));
    noStroke();
    translate(x,y,z);
    box(25);

    if (turbo == true){
        if (keyIsDown(81)){ // Q key goes forward on the Z axis
            if(z < 425){ // bounds to keep cube in screen
            z = z + 25;
            }
            console.log(z);
        }


        if (keyIsDown(69)){ // E key goes backward in the Z axis
            if(z > -425){
            z = z - 25;
            }
            console.log(z);
        }

        if (keyIsDown(87)){ // W key goes upwards in the Y axis
            if ( y > -windowHeight){
            y = y - 25;
            }
            console.log(y);
        }

        if (keyIsDown(83)){ // S key goes down in the Y axis
            if ( y < windowHeight){
            y = y + 25;
            }
            console.log(y);
        }

        if (keyIsDown(65)){ // A key goes left on the X axis
            if ( x > -windowWidth){
            x = x - 25;
            }
            console.log(x);
        }

        if (keyIsDown(68)){ // D key goes right on the X axis
            if (x < windowWidth/2){
            x = x + 25;
            }
            console.log(x);
        }
    }


}

function keyPressed() { 
    if (keyCode == DELETE || keyCode == BACKSPACE){ // clears drawing 
      background(0);
    }

    if (keyCode === 84){
        if (turbo == true){
            turbo = false;
        } else {
            turbo = true;
        }
    }

    if (keyCode === 81 && turbo){ // Q key goes forward on the Z axis
       if(z < 425){ // bounds to keep cube in screen
        z = z + 25;
       }
        console.log(z);
    }

    if (keyCode === 69){ // E key goes backward in the Z axis
        if(z > -2400){
        z = z - 25;
        }
        console.log(z);
    }

    if (keyCode === 87){ // W key goes upwards in the Y axis
        if ( y > -windowHeight/2){
        y = y - 25;
        }
        console.log(y);
    }

    if (keyCode === 83){ // S key goes down in the Y axis
        if ( y < windowHeight/2){
        y = y + 25;
        }
        console.log(y);
    }

    if (keyCode === 65){ // A key goes left on the X axis
        if ( x > -windowWidth){
        x = x - 25;
        }
        console.log(x);
    }

    if (keyCode === 68){ // D key goes right on the X axis
        if (x < windowWidth/2){
        x = x + 25;
        }
        console.log(x);
    }
     

  }
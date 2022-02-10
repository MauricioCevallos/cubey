
// cube class keeps tracks of location of each blocks and the color they were assigned at random 
//to be rendered again for each draw loop
class cube {
    constructor(r, g, b, set, x1, y1, z1, count){
        this.r = r; // red color values
        this.g = g; // green color values 
        this.b = b; // blue color values
        this.set = set; // whether or not a boxes color has been set yet (True or False)
        this.x1 = x1;     // x axis location of box
        this.y1 = y1;     // y axis location of box
        this.z1 = z1;     // z axis location of box
        this.count = count;
    }
    
    finalize(r,g,b,set){
        this.set = set;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    show(){
        if (this.count == 0){
        rotateX(100); // moves box into an angle to actually see the box as a cube
        rotateY(100);
        }
        translate(this.x1,this.y1,this.z1); // moves box into x y z coordinates within the 3d space

        if (this.set == false){
            ambientMaterial(random(255),random(255),random(255)); // random color for the cube that has not been set, strobes through colors 
        } else {
            ambientMaterial(this.r, this.g, this.b);   // color has already been set for this cube 
        }
        noStroke(); 
        box(25);
    }

}

let z = 0; //keeps track of current cubie coordinates
let y = 0;
let x = 0;
let z1 = 0; //keeps track of global cubie coordinates
let y1 = 0;
let x1 = 0;
let turbo = false;
let count = 0; //keeps track of current cubies
let cubies = []; //list of cubies 


function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(0);
    window.postMessage('hi');
    const cubey = new cube(0,0,0,false,x,y,z,count);
    cubies.push(cubey);
} 


//translate in relation to the last object that was created
function draw() { 
    //makes the box look like an actual cube
    background(0);
    ambientLight(255, 255, 255);
    for (i = 0; i < cubies.length; i++){
        cubies[i].show();
    }
    

    if (turbo == true){
        if (keyIsDown(81)){ // Q key goes forward on the Z axis
            if(z1 < 425){ // bounds to keep cube in screen
            z1 = z1 + 25;
            r = random(255);
            g = random(255);
            b = random(255);
            cubies[count].finalize(r,g,b,true);
            count++;
            const cubey = new cube(0,0,0,false,x,y,z+25,count);
            cubies.push(cubey);
            }
            console.log(z1);
        }


        if (keyIsDown(69)){ // E key goes backward in the Z axis
            if(z1 > -425){
            z1 = z1 - 25;
            r = random(255);
            g = random(255);
            b = random(255);
            cubies[count].finalize(r,g,b,true);
            count++;
            const cubey = new cube(0,0,0,false,x,y,z-25,count);
            cubies.push(cubey);
            }
            console.log(z1);
        }

        if (keyIsDown(87)){ // W key goes upwards in the Y axis
            if ( y1 > -windowHeight){
            y1 = y1 - 25;
            r = random(255);
            g = random(255);
            b = random(255);
            cubies[count].finalize(r,g,b,true);
            count++;
            const cubey = new cube(0,0,0,false,x,y-25,z,count);
            cubies.push(cubey);
            }
            console.log(y1);
        }

        if (keyIsDown(83)){ // S key goes down in the Y axis
            if ( y1 < windowHeight){
            y1 = y1 + 25;
            r = random(255);
            g = random(255);
            b = random(255);
            cubies[count].finalize(r,g,b,true);
            count++;
            const cubey = new cube(0,0,0,false,x,y+25,z,count);
            cubies.push(cubey);
            }
            console.log(y);
        }

        if (keyIsDown(65)){ // A key goes left on the X axis
            if ( x1 > -windowWidth){
            x1 = x1 - 25;
            r = random(255);
            g = random(255);
            b = random(255);
            cubies[count].finalize(r,g,b,true);
            count++;
            const cubey = new cube(0,0,0,false,x-25,y,z,count);
            cubies.push(cubey);
            }
            console.log(x1);
        }

        if (keyIsDown(68)){ // D key goes right on the X axis
            if (x1 < windowWidth/2){
            x1 = x1 + 25;
            r = random(255);
            g = random(255);
            b = random(255);
            cubies[count].finalize(r,g,b,true);
            count++;
            const cubey = new cube(0,0,0,false,x+25,y,z,count);
            cubies.push(cubey);
            }
            console.log(x1);
        }
    }


}

function keyPressed() { 
    if (keyCode == DELETE || keyCode == BACKSPACE){ // clears drawing 
      background(0);
      count = 0;
      x = 0;
      y = 0;
      z = 0;
      x1 = 0;
      y1 = 0;
      z1 = 0;
      cubies = [];
      const cubey = new cube(0,0,0,false,x,y,z,count);
      cubies.push(cubey) 
    }

    if (keyCode === 84){   //t key that lets user hold down directional keys to place boxes
        if (turbo == true){ // "t" has been clicked means turbo option is on
            turbo = false;  // turn turbo off
        } else {            // turbo is off
            turbo = true;   // turn turbo on
        }
    }

    if (keyCode === 81 ){ // Q key goes forward on the Z axis
       if(z1 < 425){ // bounds to keep cube in screen
        z1 = z1 + 25
        r = random(255);
        g = random(255);
        b = random(255);
        cubies[count].finalize(r,g,b,true);
        count++;
        const cubey = new cube(0,0,0,false,x,y,z+25,count);
        cubies.push(cubey);
       }
        console.log(z1);
    }

    if (keyCode === 69){ // E key goes backward in the Z axis
        if(z1 > -425){
        z1 = z1 - 25;
        r = random(255);
        g = random(255);
        b = random(255);
        cubies[count].finalize(r,g,b,true);
        count++;
        const cubey = new cube(0,0,0,false,x,y,z-25,count);
        cubies.push(cubey);
        }
        console.log(z1);
    }

    if (keyCode === 87){ // W key goes upwards in the Y axis
        if ( y1 > -500){
        y1 = y1 - 25;
        r = random(255);
        g = random(255);
        b = random(255);
        cubies[count].finalize(r,g,b,true);
        count++;
        const cubey = new cube(0,0,0,false,x,y-25,z,count);
        cubies.push(cubey);
        }
        console.log(y1);
    }

    if (keyCode === 83){ // S key goes down in the Y axis
        if ( y1 < 500){
        y1 = y1 + 25;
        r = random(255);
        g = random(255);
        b = random(255);
        cubies[count].finalize(r,g,b,true);
        count++;
        const cubey = new cube(0,0,0,false,x,y+25,z,count);
        cubies.push(cubey);
        }
        console.log(y1);
    }

    if (keyCode === 65){ // A key goes left on the X axis
        if ( x1 > -500){
        x1 = x1 - 25;
        r = random(255);
        g = random(255);
        b = random(255);
        cubies[count].finalize(r,g,b,true);
        count++;
        const cubey = new cube(0,0,0,false,x-25,y,z,count);
        cubies.push(cubey);
        }
        console.log(x1);
    }

    if (keyCode === 68){ // D key goes right on the X axis
        if (x1 < 500){
        x1 = x1 + 25;
        r = random(255);
        g = random(255);
        b = random(255);
        cubies[count].finalize(r,g,b,true);
        count++;
        const cubey = new cube(0,0,0,false,x+25,y,z,count);
        cubies.push(cubey);
        }
        console.log(x1);
    }

     

  }


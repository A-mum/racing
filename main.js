canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png"
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "https://i.postimg.cc/YqdnnNX1/car1.png"
car2_x = 10;
car2_y = 10;

background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg"


function add (){
    background_imagetag = new Image();
    background_imagetag.onload = uploadbackground;
    background_imagetag.src = background_image;

   car1_imagetag = new Image();
    car1_imagetag.onload = uploadcar;
    car1_imagetag.src = car1_image;    
}

function uploadbackground (){
    
    ctx.drawImage (background_imagetag, 0, 0,  canvas.width, canvas.height) ;
}

function uploadcar1 (){
ctx.drawImage(car1_imagetag,car1_x,car1_y,car1_width,car1_height);
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    if(keypressed == '38'){
        up();
        console.log("up is pressed");

    }
    if (keypressed == '40'){
        down();
        console.log("down is pressed")
    }
    if (keypressed == '37'){
        left();
        console.log("left is pressed");
    }
    if (keypressed == '39'){
        right();
        console.log("right is pressed");
    }
}

function up(){
    car1_y = car1_y-10;
    console.log ("up is pressed");

uploadbackground();
uploadcar1();
}

function down(){
car1_y = car1_y+10;
console.log ("down is pressed");

uploadbackground();
uploadcar1();
}

function left(){
    car1_x = car1_x-10
    console.log ("left is pressed");

    uploadbackground();
    uploadcar1();
}

function right(){
    car1_x = car1_x+10
    console.log ("right is pressed");
    
    uploadbackground();
    uploadcar1();
}

function add (){
    background_imagetag = new Image();
    background_imagetag.onload = uploadbackground;
    background_imagetag.src = background_image;

   car2_imagetag = new Image();
   car2_imagetag.onload = uploadcar;
   car2_imagetag.src =  car2_image;    
}

function uploadbackground (){
    
    ctx.drawImage (background_imagetag, 0, 0,  canvas.width, canvas.height) ;
}

function uploadcar1 (){
ctx.drawImage(car2_imagetag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    if(keypressed == '38'){
        up();
        console.log("up is pressed");

    }
    if (keypressed == '40'){
        down();
        console.log("down is pressed")
    }
    if (keypressed == '37'){
        left();
        console.log("left is pressed");
    }
    if (keypressed == '39'){
        right();
        console.log("right is pressed");
    }
}

function up(){
    car2_y = car2_y-10;
    console.log ("up is pressed");

uploadbackground();
uploadcar2();
}

function down(){
car2_y = car2_y+10;
console.log ("down is pressed");

uploadbackground();
uploadcar2();
}

function left(){
    car2_x = car2_x-10
    console.log ("left is pressed");

    uploadbackground();
    uploadcar2();
}

function right(){
    car2_x = car2_x+10
    console.log ("right is pressed");
    
    uploadbackground();
    uploadcar2();
}
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;
background_image="image.jpg";
car_image="top car .png";
car_x=10;
car_y=10;

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=rover_image;
    }

    function uploadBackground(){
        ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);   
    }
    function uploadcar(){
        ctx.drawImage(car_imageTag,car_x,car_y,car_width,car_height);
    }

    window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        car_x= +10;
        console.log("up");
    }

    if(keyPressed=='40'){
        car_x=-10
        console.log("down");
    }

    if(keyPressed=='37'){
        car_y=+10;
        console.log("left");
    }

    if(keyPressed=='39'){
        car_y-10;
        console.log("right");
    }
}

function down()
{
    if(car_y<=500)
    {
        car_y=car_y+10;
        console.log("when down arrow is pressed, x="+ car_x + "|y=" +car_y);
        uploadBackground();
        uploadcarcar();
    }
}

function left()
{
    if(car_x>=0)
    {
        car_x=car_x-10;
        console.log("when left arrow is pressed, x="+ car_x + "|y=" +car_y);
        uploadBackground();
        uploadcar();
    }
}

function right()
{
    if(car_x<=700)
    {
        car_x=car_x+10;
        console.log("when right arrow is pressed, x="+ car_x + "|y=" +car_y);
        uploadBackground();
        uploadcar();
    }
}

function up()
{
    if(car_y>=0)
    {
        car_y=car_y-10;
        console.log("when up arrow is pressed, x="+ car_x + "|y=" +car_y);
        uploadBackground();
        uploadcar();
    }
}
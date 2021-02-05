canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="racing.jpg";
car1_width=120;
car1_height=90;
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=90;
car2_image="car2.png";
car2_x=10;
car2_y=100;
function add()
{
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;
    car1_img=new Image();
    car1_img.onload=uploadcar1;
    car1_img.src=car1_image;
    car2_img=new Image();
    car2_img.onload=uploadcar2;
    car2_img.src=car2_image;
}
function uploadBackground()
{
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function uploadcar1()
{
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2()
{
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=="38")
    {
        console.log("up");
    }
    if(keypress=="40")
    {
        console.log("down");
    }
    if(keypress=="37")
    {
        console.log("left");
    }
    if(keypress=="39")
    {
        console.log("right");
    }
}
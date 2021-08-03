canvas = document.getElementById('mc');
ctx = canvas.getContext("2d");
gw = 75;
greencar_height = 100;
background_image = "https://i.postimg.cc/NfZLzNcn/parking-Lot.jpg";
greencar_image = "https://i.postimg.cc/jSNC0zqS/car2.png";
greencar_x = 5;
greencar_y = 225;
function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;
greencar_imgTag = new Image();
greencar_imgTag.onload = uploadgreencar;
greencar_imgTag.src = greencar_image;
}
function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadgreencar() {
ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, gw, greencar_height);	
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
keyPressed = e.keyCode;
if(keyPressed == '38')
{
up();
}
if(keyPressed == '40')
{
down();
}	
if(keyPressed == '37')
{
left();
}	
if(keyPressed == '39')
{
right();
}		
}
function up()
{
if(greencar_y >= 0)
{
greencar_y = greencar_y - 10;
uploadBackground();
uploadgreencar();
}
}
function down()
{
if(greencar_y <= 800)
{
greencar_y = greencar_y + 10;
uploadBackground();
uploadgreencar();
}
}
function left()
{
if(greencar_x >= 0)
{
greencar_x = greencar_x - 10;
uploadBackground();
uploadgreencar();
}
}
function right()
{
if(greencar_x <= 1000)
{
greencar_x = greencar_x + 10;
uploadBackground();
uploadgreencar();
}
}

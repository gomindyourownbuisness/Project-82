canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "";
var lastPosition_Of_x , lastPosition_Of_y ;

canvas.addEventListener("mousedown", my_mousedown);
  
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave
);
  
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
  
function my_mouseup(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mousemove", my_mousemove);

  
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown")
    {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      
      console.log("Last position of x and y coordinates = ")
      console.log ("x = "+lastPosition_Of_x+ "y = "+lastPosition_Of_y);
      ctx.moveTo (lastPosition_Of_x , lastPosition_Of_y);

      console.log("Current position of x and y coordinates = ");
      console.log("x = " + current_position_of_mouse_x + "y = "+ current_position_of_mouse_y );
      ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , 20 , 0 , 2*Math.PI);
      ctx.stroke();
    }

    lastPosition_Of_x = current_position_of_mouse_x
    lastPosition_Of_y = current_position_of_mouse_y
    
}

function clearArea()
{
    ctx.clearRect( 0 , 0 ,canvas.width , canvas.height)
}
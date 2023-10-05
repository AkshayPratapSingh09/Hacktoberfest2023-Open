
var can=document.getElementsByClassName("wow")[0];
can.width=window.innerWidth;
can.height=window.innerHeight;
var color=Math.floor(Math.random()*51);
var maxradius= 14
  var minradius =7
var mouse={x:undefined,
          y:undefined } 

var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
window.addEventListener("mousemove",function(event){
  mouse.x=event.x
  mouse.y=event.y
})
window.addEventListener("resize",function(){
  can.width=window.innerWidth;
can.height=window.innerHeight;
  init()
})
const c=can.getContext("2d");
function Circle(x,y,dx,dy,radius,col)
{
  this.x=x
  this.y=y
  this.dx=dx
  this.dy=dy
  this.radius=radius
  this.minrad=radius
  this.col=col
  this.draw = function () {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.strokeStyle = "white";
  c.fillStyle = colorArray[this.col];
  c.shadowColor = colorArray[this.col];
  c.shadowBlur = 20;
  c.shadowOffsetX = 0;
  c.shadowOffsetY = 0;
  c.fill();
  c.stroke();
  //removing
    c.shadowColor = "transparent";
  c.shadowBlur = 0;
  c.shadowOffsetX = 0;
  c.shadowOffsetY = 0;
};

  this.update = function () {
  if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
    this.dx = -this.dx;
  }
  if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
    this.dy = -this.dy;
  }
  
  this.x = this.x + this.dx;
  this.y = this.y + this.dy;

  var distanceX = mouse.x - this.x;
  var distanceY = mouse.y - this.y;
  var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

  var targetRadius = (distance < 50) ? maxradius : this.minrad;
  var radiusDiff = targetRadius - this.radius;
  var radiusChange = Math.sign(radiusDiff) * 0.5; 

  this.radius += radiusChange;

  this.draw();
};


}
var circlearray = [];

function init()
{
  circlearray=[]
  for (var i=0;i<250;i++)
  {
    
    var radius = Math.random()*3+1;
   var x =Math.random()*(innerWidth-radius*2)+radius;
   var y=Math.random()*(innerHeight-radius*2)+radius;
    col = Math.floor(Math.random() * colorArray.length); 
    dx=(Math.random()-0.5)
    dy=(Math.random()-0.5)
    circlearray.push(new Circle(x,y,dx,dy,radius,col))
    
    
  }
}

 
function animate()
{
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth,innerHeight);
  for(var j=0;j<circlearray.length;j++)
    {
      circlearray[j].update()
    }
  
  
}
init();
animate();


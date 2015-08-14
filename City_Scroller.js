class building{
	var xPos;
	var yPos;
	var xSpeed;
	var width;
	var height;
	var r;
	var g;
	var b;
 
 building(xp,yp,xs,w,h,color)
	{
	 xPos= xp;
	 yPos= yp;
	 xSpeed = xs;
	 width= w;
	 height= h;
	 r= color[0];
	 g=color[1];
	 b=color[2];
	 }
	 function drawBuilding()
	 {
		 noStroke();
		 fill(r,g,b);
		 rect(xPos,yPos,width,height); 
		 }
}
var building1;
building1 = new building(150,150,30,50,255,255,255);
drawBuilding();

class building{
	var xPos;
	var yPos;
	var xSpeed;
	var ySpeed;
	var width;
	var height;
	var r;
	var g;
	var b;
 
 building(xp,yp,w,h,xs,ys,color)
	{
	 xPos= xp;
	 yPos= yp;
	 xSpeed = xs;
	 ySpeed = ys;
	 width= w;
	 height= h;
	 r= color[0];
	 g=color[1];
	 b=color[2];
	 }
	 function drawBuilding(); // function to call to make the "buildings"
	 {
		 fill(r,g,b);
		 rect(xPos,yPos,width,height); 
}
	void move(screenX,screenY) { // to move the "buildings"
		xPos = xPos + xSpeed
	}
}
 //lists for each backdrop
 var back= [];
 var middle= [];
 var front= [];
 
 void setup()
 {
	 size(600,800);
	 background(0,51,102);
	 for (var i=0; i<100; i++) 
	{		var color = [190,190,190];// for the color of the back (gray)
			var width= random(30, 50); // creating a random width
			var height = random(0, -400); // creating a random height
			var xp = random(0,1000); //x starting position
			var yp = 600; //y starting position
			back[].push(new building(xp,yp,w,h,0.2,0,color);//making a new building with attributes
			}
		for var(i=0;i<100;i++) {
			var color = [211,211,211];// for the color of the middle(light gray)
			var width= random(30, 50); // creating a random width
			var height = random(0, -200); // creating a random height
			var xp = random(0,1000); //x starting position
			var yp = 600; //y starting position
			middle[].push(new building(xp,yp,w,h,0.4,0,color); //making a new building with attributes
		}
		for var(i=0;i<100;i++) {
			var color = [255,255,240]];// for the color of the front(ivory)
			var width= random(30, 50); // creating a random width
			var height = random(0, -100); // creating a random height
			var xp = random(0,1000); //x starting position
			var yp = 600; //y starting position
			front[].push(new building(xp,yp,w,h,0.6,0,color); //making a new building with attributes
		}
 }
 void draw()
	{ background(0,51,102);
		for(var x=0; x<back.length; x++){ // loop for drawing + moving rectangles for the back
			{
			back[].drawbuilding(); // draw function for rectangles
			back[].move(); // move function for moving the back
			}
		 for(var x=0;x<middle.length;x++) // loop drawing + moving the middle rectangles
		 {
			 middle[].drawBuilding();
			 middle[].move();
		 }
		 for(var x=0;x<front.length;x++) // loop drawing + moving the front rectangles
		 {
			 front[].drawBuilding();
			 front[].move();
		 }
			}	
	}
	
 
class Building {
	var xPosition;
	var yPosition;
	var height;
	var width;
	var r;
	var g;
	var b;
	
	Building(bWidth,bHeight, color, x, y){
		xPosition = x;
		yPosition = y;
		r = color[0];
		g = color[1];
		b = color[2];
		width = bWidth;
		height = bHeight;
	}
	
	void drawBuilding(){
		noStroke();
		fill(r,g,b);
		rect(xPosition, yPosition, width, height);
	}
	
	void move(speed){
		xPosition = xPosition - speed;
	}
}

//var frontScroller = [];
//var middleScroller = [];
var backScroller = [];
//var frontSpeed = 0.2;
//var middleSpeed = 0.4;
var backSpeed =0.6;

void setup()
{
	size(800,600);
	background(17,9,89);

	//for(i=0;i<frontScroller.length;i++){// Write a loop that adds buildings to the frontScroller. 
		//height = random(400, 500);// Make the height a random number between 400 and 500 
		//width = random(20,50);// and the width a random number between 20 and 50.
		// HINT: Think about how to calculate the X and the Y.
		//}

	//for(i=0;i<middleScroller.length;i++){// Write a loop that adds buildings to the middleScroller. 
		//height = random(300,400);// Make the height a random number between 300 and 400 
		//width = random(100,250);// and the width a random number between 100 and 250.
		// HINT: Think about how to calculate the X and the Y. 
		//}

	for(var i=0;i<100;i++){// Write a loop that adds buildings to the backScroller. 
		var building1;
		bHeight= random(100,200);// Make the height a random number between 100 and 200 
		bWidth = random(300,400);// and the width a random number between 300 and 400.
		color(185,185,185);
		x = random(100,500);
		y= random(100,600); //HINT: Think about how to calculate the X and the Y
		building1 = new Building(bWidth,bHeight, color, x, y)
		backScroller.push(building1);
	}
}	


void draw(){  
	background(17,9,89); 

	for(var i=0;i<backScroller.length;i++) { // Write a loop that loops through the back building 
		backScroller[i].drawBuilding(); 
	}

		for(var i=0;i<backScroller.length;i++) 
		{ // Write a loop that loops through the back building 
		backScroller[i].move(0.6);// that moves and draws them. 
	}
	//for(var i=0;i<middleScroller.length;i++) {// Write a loop that loops through the middle building
		//drawBuilding();
		//move(0.4);// that moves and draws them. 
		//}

	//for(var i=0;i<frontScroller.length;i++) {// Write a loop that loops through the front building 
		//drawBuilding();
		//move(0.2);//that moves and draws them. 
		//}

}
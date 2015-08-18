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

var frontScroller = [];
var middleScroller = [];
var backScroller = [];
var frontSpeed = 10;
var middleSpeed = 4;
var backSpeed =6;

void setup()
{
	size(1875,1000);
	background(17,9,89);
	var v=0;
	for(i=0;i<100;i++){
		var building3;
		var bHeight= Math.floor((Math.random() *100 ) +200);
		var bWidth = Math.floor((Math.random() *20 ) +50 );
		var color=[0,255,0];
		var x = v;
		var y= 150 - bHeight; 
		v = v + bWidth;
		building3 = new Building(bWidth,bHeight, color, x, y);
		frontScroller.push(building3);
		}
	var a=0;
	for(i=0;i<100;i++){ 
		var building2;
		var bHeight= Math.floor((Math.random() *350 ) + 300);
		var bWidth = Math.floor((Math.random() *250 ) +100 );
		var color=[100,200,150];
		var x = a;
		var y= 600 - bHeight; 
		a = a + bWidth;
		building2 = new Building(bWidth,bHeight, color, x, y);
		middleScroller.push(building2);
		}
		
	var r = 0;
	for(var i=0;i<100;i++){
		var building1;
		var bHeight= Math.floor((Math.random() * 100) + 350);
		var bWidth = Math.floor((Math.random() * 400) + 300);
		var color=[185,185,185];
		var x = r;
		var y= 1000 - bHeight; 
		r = r + bWidth;
		building1 = new Building(bWidth,bHeight, color, x, y);
		backScroller.push(building1);
		
	}
	
}	


void draw(){  
	background(17,9,89); 

	for(var i=0;i<backScroller.length;i++) { 
		backScroller[i].drawBuilding(); 
	}

	for(var i=0;i<backScroller.length;i++) { 
		backScroller[i].move(6);
	}
	for(var i=0;i<middleScroller.length;i++) {
		middleScroller[i].drawBuilding();
	}
	
	for(var i=0;i<middleScroller.length;i++){
		middleScroller[i].move(4);
		}

	for(var i=0;i<frontScroller.length;i++) {
		frontScroller[i].drawBuilding();
		}
	for(var i=0;i<frontScroller.length;i++) {
		frontScroller[i].move(10); 
		}

}
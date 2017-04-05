addEventListener('load', initiate);
var canvas, clear, empty;
var x = 680, y = 500, max = 683, min = 330, right = 921, d=600, e=600; o=0; 
var cross=[]; boxxx=[]; boyyy=[];
var count=5;
var food= false;
var losos='media/img/losos.png', bear1='media/img/bear.png', toxic='media/img/toxic.png';

					function initiate (){
                        media = document.getElementById('media');
						media_toxic = document.getElementById('media_toxic')
						empty = document.getElementById('count');

						clear=document.getElementById('clear');
						clear.addEventListener('click', clearAll);

						
						
						var elem=document.getElementById('canvas');
						 canvas=elem.getContext('2d');

						 addEventListener('mousemove', animation);
					     //draw(680,500,2.2);
					     //draw(520,400,1);
						 draw_r([680,520],[500,400],[2.2,1])
					     plankton();
					    }

					    function clearAll(){
					    	sessionStorage.clear();
					    	count=5;
					    	show();
					    }

					    function show(){

					    	empty.innerHTML = count;

					    }




					function animation(e){
					canvas.clearRect(0, 0, 921, 683);
				    bear(e);	 
					animation_move(e);
					}

function animation_move(e){
						var img=new Image();
						var xmouse=e.clientX;
						var ymouse=e.clientY;
						xm = xmouse;
						ym = ymouse;
						var width = cross[0] + 10;
						var height = cross[1] + 5;

						
						if (xmouse > right-80) {
						    xmouse= right-80
						}

						if (ymouse < min) {
							ymouse=min
						};
						if (ymouse > max-30){
							ymouse=max-30
						}

						if ((xmouse + 100 >= cross[0]) && (xmouse <= cross[0] + 10)) {
							 var db=true;

						} 

					    if ((ymouse + 27 >= cross[1]) && (ymouse <= cross[1] + 5)) {
					    	 var nx=true;
					    }



						if (db==true && nx==true) {
							food=true;
							media.play();
							sessionStorage.setItem('count', Number(count)+1);
							//alert(count);
						count = sessionStorage['count'];

						show();
						
						
					
						}
						
for (a=0; a<boxxx.length; a++){
	if((xmouse + 100 >= boxxx[a]) && (xmouse <= boxxx[a] + 100)) {
		var box = true;
	}
	if((ymouse + 27 >= boyyy[a]) && (ymouse <= boyyy[a] + 27)) {
		var box_w = true;
	}
	if(box==true && box_w==true) {
		sessionStorage.setItem('count', Number(count)-1);
		count = sessionStorage['count'];
		show();
	}
}						
						//else food=false;
						
						
						
						img.src=losos;
					
						canvas.drawImage(img, xmouse, ymouse);
						
						canvas.beginPath();
						/*canvas.arc(xmouse, ymouse, 10, 0, Maath.PI*2, false);*/
}

function bear (e){
	var img=new Image();
	img.src=bear1;
	canvas.drawImage(img, 320, 180);
	var xmouse=e.clientX;
	var ymouse=e.clientY;
	var xeyel=414;
	var yeyel=230;
	var ang=Math.atan2(ymouse - yeyel, xmouse - xeyel);
	//console.log(ang);
	var x= xeyel + Math.round(Math.cos(ang)*2);
	var y=yeyel + Math.round(Math.sin(ang)*2);
	canvas.beginPath();
	canvas.arc(xeyel, yeyel, 4, 0, Math.PI*2, false);
	canvas.moveTo(xeyel + 70, yeyel);
	canvas.arc(xeyel + 18, yeyel+8, 4, 0, Math.PI*2, false);
	canvas.fillStyle='white';
	canvas.fill();
	canvas.stroke;
    canvas.beginPath();
	canvas.moveTo(x+10, y);
	canvas.arc(x, y, 2, 0, Math.PI*2, false);
	canvas.moveTo(x + 60, y);
	canvas.arc(x+ 18, y+8, 2, 0, Math.PI*2, false);
	canvas.fillStyle='black';
	canvas.fill();
}

function selfRandom(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*function draw(xx=null, yy=null, u=null) {
	var img=new Image();
	img.src=toxic; 
	var xmouse=e.clientX;
	var ymouse=e.clientY;
	canvas.clearRect (xx, yy, 150, 65);
	animation_move(e);
	canvas.drawImage(img, xx, yy);
	canvas.beginPath();
	xx += -u;
	requestAnimationFrame(function(){
	draw(xx,yy,u)});
	 	if (xx < -100 ) {
		xx = 680; 
		yy=selfRandom(350, 683); 
}*/

function draw_r(xx=[],yy=[],u=[]){
	var img=new Image();
	img.src=toxic;
	//console.log(img);
	for (var i = 0; i < xx.length; i++) {
	//console.log(xx[i]+'/////');
    canvas.clearRect(xx[i], yy[i], 150, 65);
	animation_move(e);
	canvas.drawImage(img, xx[i], yy[i]);
	canvas.beginPath();
	xx[i] += -u[i];
	if (xx[i] < -100) {
		xx[i] = 680;
		yy[i] = selfRandom(350, 683);
	}
	boxxx[i] = xx[i];
	boyyy[i] = yy[i];
	}
	requestAnimationFrame(function(){
	draw_r(xx,yy,u);
	});
}
/*function draw2() {
			 var img=new Image();
			 img.src=toxic; 
			 canvas.clearRect (a, b, 150, 65);
			 animation_move(e);
             canvas.drawImage(img, a, b);
			 canvas.beginPath();
			a += -2.2;
			requestAnimationFrame(draw2);
           if (a < -100 ) {
				a = 680; b=selfRandom(350, 683); 
			}
			}*/
			
		
function plankton() {
	/*console.log (food);*/
	canvas.clearRect (d, e, 10, 5);
	canvas.fillStyle='black';
	canvas.fillRect(d, e, 5, 5);
	canvas.fill
	canvas.beginPath();
	d += -3.2;
	requestAnimationFrame(plankton);
		if (food == false){
			if (d < -100) {
			d=700; e=selfRandom(350, 683);
			}
			cross[0] = d;
			cross[1] = e;
			}

		else {
			food = false;
            d=700; e=selfRandom(350, 683);
			cross[0] = d;
			cross[1] = e;
			}
}
	
	/*canvas.fillRect(450, 390, 120, 30);
	canvas.fillRect(470, 380, 15, 12);
	canvas.fillRect(540, 420, 15, 15);
	
	canvas.fillRect(100, 390, 120, 30);
	
	canvas.beginPath();
	canvas.moveTo(120, 420);
	canvas.lineTo(110, 430);
	canvas.lineTo(110, 420);
	canvas.fill();
	canvas.closePath();
	
	canvas.beginPath();
	canvas.moveTo(160, 420);
	canvas.lineTo(165, 430);
	canvas.lineTo(175, 420);
	canvas.fill();
	canvas.closePath();
	
	canvas.beginPath();
canvas.moveTo(90, 700);
canvas.quadraticCurveTo(180, 300, 200, 700);
canvas.fill();
canvas.stroke();

canvas.beginPath();
canvas.moveTo(550, 700);
canvas.quadraticCurveTo(630, 350, 750, 700);
canvas.fill();
canvas.stroke();

   canvas.beginPath();
	canvas.moveTo(120, 420);
	canvas.lineTo(110, 430);
	canvas.lineTo(110, 420);
	canvas.fill();
	canvas.closePath();
	canvas.stroke();
	
	canvas.beginPath();
	canvas.moveTo(160, 420);
	canvas.lineTo(165, 430);
	canvas.lineTo(175, 420);
	canvas.fill();
	canvas.closePath();*/






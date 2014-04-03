
//Cargar Pagina
window.onload = function()
	{
		laberinto();
	}	

	function laberinto () {
		
	var posX;
	var posY;
	var caja='Caja'
	 var posicion=['Izquierda','Espalda','Derecha','Frente'];
	 var camina=false;
	 var contador=0;
	 var direccion=0;
	capturar("Luigi").style.left = "240px";
	capturar("Luigi").style.top = "70px";
	// Posicion Inicial de Luigi 
	capturar('Luigi').setAttribute('class','Luigi_Sprite_Generator Derecha_0');
	capturar('Cajas').setAttribute('class','Cajas_Mario Caja_0');

//240*70

//Set Interval --> Inicio
 setInterval(function ()
 {


 	if(camina)
 	{
 		capturar('Luigi').setAttribute('class','Luigi_Sprite_Generator '+ posicion[direccion] +"_"+contador);
		capturar('Cajas').setAttribute('class','Cajas_Mario Caja_'+contador);
		contador++;
		if(contador >= 5)
		{
			contador = 0;
		}



			posX = parseInt(capturar("Luigi").style.left);
			console.log('En left X: '+posX);
			
			posY = parseInt(capturar("Luigi").style.top);
			console.log('En TOP Y : '+posY);
			
			switch(direccion)
			{
				case 0: posX -= 10; break;
				case 1: posY -= 10; break;
				case 2: posX += 10; break;
				case 3: posY += 10; break;
			}

				//Camino

				
					
				

					if ((posX>=430&&posX<=450)&&(posY >=60 && posY<=140)) {	} 
					else if ((posX>=240&&posX<=380)&&(posY >=85&& posY<=90)) {}
					else if ((posX>=240&&posX<=530)&&(posY >=179&& posY<=190)) {}
					else if ((posX>=280&&posX<=450)&&(posY >=130&& posY<=140)) {}
					else if ((posX>=495&&posX<=530)&&(posY >=80&& posY<=170)) {} 
					else if ((posX>=580&&posX<=600)&&(posY >=60&& posY<=190)) {} 
					else if ((posX>=645&&posX<=675)&&(posY >=190&& posY<=230)) {} 
					else if ((posX>=580&&posX<=650)&&(posY >=180&& posY<=190)) {}
					else if ((posX>=495&&posX<=735)&&(posY >=230&& posY<=240)) {}
					else if ((posX>=495&&posX<=530)&&(posY >=230&& posY<=395)) {} 
					else if ((posX>=357&&posX<=490)&&(posY >=275&& posY<=295)) {}
					else if ((posX>=355&&posX<=375)&&(posY >=250&& posY<=275)) {} 
					else if ((posX>=285&&posX<=460)&&(posY >=230&& posY<=243)) {}
					else if ((posX>=285&&posX<=310)&&(posY >=280&& posY<=390)) {} 
					else if ((posX>=427&&posX<=450)&&(posY >=330&& posY<=410)) {} 
					else if ((posX>=285&&posX<=460)&&(posY >=330&& posY<=350)) {}
					else if ((posX>=285&&posX<=390)&&(posY >=373&& posY<=395)) {}
					else if ((posX>=580&&posX<=600)&&(posY >=277&& posY<=383)) {} 
  	             	else if ((posX>=720&&posX<=744)&&(posY >=330&& posY<=410)) {}
					else if ((posX>=577&&posX<=785)&&(posY >=275&& posY<=290)) {}
					else if ((posX>=577&&posX<=670)&&(posY >=374&& posY<=385)) {}
					else if ((posX>=646&&posX<=730)&&(posY >=330&& posY<=345)) {}
					else if ((posX>=650&&posX<=670)&&(posY >=80&& posY<=142)) {}
					else if ((posX>=720&&posX<=740)&&(posY >=130&& posY<=209)) {}
					else if ((posX>=645&&posX<=785)&&(posY >=130&& posY<=150)) {}
					else if ((posX>=715&&posX<=785)&&(posY >=80&& posY<=100)) {}
             		else if ((posX>=790&&posX<=810)&&(posY >=60&& posY<=100)) {} 
             		else if ((posX>=790&&posX<=810)&&(posY >=60&& posY<=100)) {} 
           			else if ((posX>=790&&posX<=810)&&(posY >=130&& posY<=410)) {} 
           			




					else if((posX >= 240 && posX <= 880) && (posY >= 60 && posY <= 410))
			{
				capturar("Luigi").style.left = posX + "px";
				capturar("Luigi").style.top = posY + "px";
			};

			
			



	}
},100);

if((posX>=800&&posX<=880)&&(posY>=60&&posY<=410)){
				capturar('Luigi').setAttribute('class','Luigi_Sprite_Generator '+ posicion[direccion] + "_0");
				alert('!!HAS GANADO!!');
				prompt('¿Quieres volver a jugar?');
			}


window.onkeydown = function(e)
	{
		var code = e.keyCode ? e.keyCode : e.which;
		if(camina == false)
		{
			if(code >= 37 && code <= 40)
			{
				direccion = code - 37;
				camina = true;

			}
		}
	}
	window.onkeyup = function(e)
	{
		var code = e.keyCode ? e.keyCode : e.which;
		if(camina == true)
		{
			if(code >= 37 && code <= 40)
			{			
				direccion = code - 37;
				capturar('Luigi').setAttribute('class','Luigi_Sprite_Generator '+ posicion[direccion] + "_0");
		
				camina = false;
			}
		}
	}
}


 function capturar (div) {
	return document.getElementById(div)	
}
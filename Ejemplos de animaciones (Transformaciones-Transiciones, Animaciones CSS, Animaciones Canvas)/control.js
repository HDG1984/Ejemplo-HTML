
//Selecciona el botón por su ID y agrega un evento de clic al botón.
var boton1 = document.getElementById("parar"); 
boton1.addEventListener("click", function() { 
    //Selecciona cada una de las animaciones por su id y las pausa cambiando el estilo de animationPlayState.
    var animacion1 = document.getElementById("animacion_1");
    animacion1.style.animationPlayState = "paused";

    var animacion2 = document.getElementById("animacion_2");
    animacion2.style.animationPlayState = "paused";

    var animacion3 = document.getElementById("animacion_3");
    animacion3.style.animationPlayState = "paused";
});

//Selecciona el botón por su ID y agrega un evento de clic al botón.
var boton2 = document.getElementById("reanudar"); 
boton2.addEventListener("click", function() { 
    //Selecciona cada una de las animaciones por su id y las reanuda cambiando el estilo de animationPlayState.
    var animacion1 = document.getElementById("animacion_1");
    animacion1.style.animationPlayState = "running";

    var animacion2 = document.getElementById("animacion_2");
    animacion2.style.animationPlayState = "running";

    var animacion3 = document.getElementById("animacion_3");
    animacion3.style.animationPlayState = "running";
});






/*
Función que dibuja el contorno de la pila y el polo en el lienzo Canvas con el id del lienzo y creando dos contextos en 2d para cada dibujo, 
    conectando curvas con el siguiente punto, con bordes redondeados de color azul y anchura en el polo de 2 y 4 para el cuerpo.
*/
function contornoPila(){
    var miCanvas=document.getElementById("lienzo_canvas");
    var cuerpoPolo = miCanvas.getContext("2d");
    var cuerpo = miCanvas.getContext("2d");

    function dibujaCuerpoPolo(cuerpoPolo){
        var x = 90;
        var y = 30;
        var width = 20;
        var height = 20;
        var radius = 4;

        cuerpoPolo.beginPath();
        cuerpoPolo.moveTo(x + radius, y);
        cuerpoPolo.arcTo(x + width, y, x + width, y + height, radius);
        cuerpoPolo.arcTo(x + width, y + height, x, y + height, radius);
        cuerpoPolo.arcTo(x, y + height, x, y, radius);
        cuerpoPolo.arcTo(x, y, x + width, y, radius);
        cuerpoPolo.closePath();

        cuerpoPolo.strokeStyle = 'blue';
        cuerpoPolo.lineWidth = 2;
        cuerpoPolo.stroke();
    }


    function dibujaContorno(cuerpo){
        var x = 60;
        var y = 50;
        var width = 80;
        var height = 222;
        var radius = 8; 

        
        cuerpo.beginPath();
        cuerpo.moveTo(x + radius, y);
        cuerpo.arcTo(x + width, y, x + width, y + height, radius);
        cuerpo.arcTo(x + width, y + height, x, y + height, radius);
        cuerpo.arcTo(x, y + height, x, y, radius);
        cuerpo.arcTo(x, y, x + width, y, radius);
        cuerpo.closePath();

        cuerpo.strokeStyle = 'blue';
        cuerpo.lineWidth = 4;
        cuerpo.stroke();
    }

    dibujaCuerpoPolo(cuerpoPolo);
        dibujaContorno(cuerpo);

}





    
function animacionCanvas(){
    /*Se crean tres contextos en 2d para cada dibujo*/
    var miCanvas=document.getElementById("lienzo_canvas"); 
    
    var polo = miCanvas.getContext("2d");
    var barra = miCanvas.getContext("2d"); 
    var texto = miCanvas.getContext("2d");

    /*Se declara la variable miint que luego servirá para detener la animación y se le da valor de 270 a y. */
    var y=270;
    var miint;

    /* Función que dibuja un cuadrado para la animación del polo con fillRect posicionándolo y dando dimensiones, con un color de fondo.*/
    function dibujaPolo(polo){
        polo.beginPath();
        polo.fillStyle = "grey";
        polo.fillRect(91,31,18,18);
        polo.closePath();  
    }

    /* Función que dibuja un rectangulo para la animación del cuerpo de la pila con fillRect posicionándolo y dando dimensiones, siendo la dimensión vertical una 
        variable que se irá decrementando para hacer la progresión de la animación (- 264 para posicionarla en la parte baja del lienzo que mide 300) con un color de fondo.*/
    function dibujaBarra(barra,y){
        barra.beginPath();
        barra.fillStyle = "green";
        barra.fillRect(65,268,71, y - 264);
        barra.closePath();
    }

    /*Función que dibuja el texto en línea, centrado, con tamaño de 1em Arial y de color rojo, posicionado a 100, 295. */
    function dibujarTexto(texto){
        texto.textBaseline="ideographic";
        texto.textAlign="center";
        texto.font="1em Arial";
        texto.fillStyle="red";
        texto.fillText("¡Cargada!",100,295);
    }
    
    /* Iniciamos la función setInterva llamará a la función que pinta el rectángulo hasta que la variable y llegue a 270*/            
    /* En ese momento paramos la repeticón de la llamada a la función con clearInterval*/

    /* Introducimos el identificador en la variable miint, que nos permitirá posteriormente detener la llamada a la función (200 ms)*/
    miint=setInterval(function(){
        /*y -10 para que la barra progrese hacia arriba. */
        y=y-10;
        
        /*Se dibuja la barra en función del valor de y. */
        dibujaBarra(barra,y);
        
        /*Cuando y sea menor o igual a 50, se detiene la animación con clearInterval y el valor de miint, se dibuja el polo de finalización y texto. */
        if (y<=50){
            clearInterval(miint);
            dibujaPolo(polo);
            dibujarTexto(texto);
        }
       
    }
    ,200);
    
}

/*Al cargar la página se carga la función que dibuja el contorno de la pila. */
window.addEventListener('load',contornoPila);

/*Al pulsar el botón se ejecuta la función de la animación. */
var boton3 = document.getElementById("cargar");
boton3.addEventListener('click',animacionCanvas);     

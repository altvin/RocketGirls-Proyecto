const rocket = document.getElementById("rocket"); // Icono de la página web
const barraLateral = document.querySelector(".barra-lateral"); 
const spans = document.querySelectorAll("span"); // Para seleccionar todos los elementos span de la barra lateral usamos el método query selector all este nos devolverá una lista con todos los elementos span encontrados
const palanca = document.querySelector(".switch");  //Evento clic del switch para modo oscuro
const circulo = document.querySelector(".circulo"); // Obtenemos la referencia al círculo al habilitar el modo oscuro
const menu = document.querySelector(".menu"); // Obtenemos la referencia del botón menu
const main = document.querySelector("main");

// ya con la referencia arriba usamos el método add event listener y añadimos el evento clic

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral"); //al presionar en el boton del menu a la barra lateral le agregamos o le quitaremos la clase max usando el metodo toggle
    if(barraLateral.classList.contains("max-barra-lateral")){ //al momento de presionar en el botón del menu con un if verificamos si la barra lateral tiene la clase max
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){                             // En caso de que la pantalla sea menor o igual a 320 pixeles al presionar en el boton del menu la barra lateral se muestra minimizada
        barraLateral.classList.add("mini-barra-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

// Ya con la referencia usamos el método Add Event Listener para crear el evento clic del switch
// Al hacer clic en el switch lo que hacemos es obtener la referencia al body

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode"); // Al body tenemos que agregarle o quitarle la clase dark mode
    body.classList.toggle("");
    circulo.classList.toggle("prendido"); // Añadimos la clase encendido al círculo y si deshabilitamos el modo oscuro la eliminamos por eso usamos el método Toggle y se aprecia como el círculo se mueve al habilitar o deshabilitar el modo oscuro
});

rocket.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{   //para seleccionar todos los elementos span de la barra lateral usamos el método query selector all este nos devolverá una lista con todos los elementos span encontrados
        span.classList.toggle("oculto");
    });

    //con un foreach recorremos la lista de spans y a cada uno de ellos le asignamos la clase oculto, ahora podemos ver que el span del boton tambien se oculta
    // hubo un problema al minimizar la barra lateral, el texto empujaba al icono y para arreglarlo el texto debe tener un ancho de 0 para que no ocupe espacio innecesariamente
});
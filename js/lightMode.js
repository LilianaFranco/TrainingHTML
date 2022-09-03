
let goLight = document.querySelector("#change-mode")
let navigation = document.querySelectorAll("header a")
let cards = document.querySelectorAll(".card")


//Escuchar el clic de un botón para que funcione el dark mode cuando el usuario desee.
goLight.addEventListener("click", function (){
    document.querySelector('body').classList.toggle("light") //cambio de fondo del body

    navigation.forEach(element => { //cambio de color de fuente del menú de navegación
        element.classList.toggle("light") 
    });

    cards.forEach(element => { //cambio del fondo de tarjetas
        element.classList.toggle("cardMode") 
    });

    document.querySelector(".contact-form").classList.toggle("formMode")
    

})

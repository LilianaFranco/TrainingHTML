
let goLight = document.querySelector("body")
let navigation = document.querySelectorAll("header a")

//Escuchar el clic de un botón para que funcione el dark mode cuando el usuario desee.
goLight.addEventListener("click", function (){
    document.querySelector('body').classList.toggle("light") 
    navigation.forEach(element => {
        element.classList.toggle("light") 
    });
})

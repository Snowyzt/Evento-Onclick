
// Cuando sé de clic en el botón “Iniciar sesión” este debe cambiar a «Cerrar sesión».

function cerrarSesion(elemento){
    elemento.innerText = "Cerrar Sesion";
    elemento.style.backgroundColor = "#ff2949";
}

// Cuando se da clic en “Agregar definición” el botón debe desaparecer.

function agregarDefinicon(elemento){
    elemento.remove();
}

// Cada vez que se le da clic al botón de like de cada definición, este debe aumentar el conteo de likes de cada definición.
function likeMascota(elemento){
    let l = elemento.children;
    let numLikes = Number(l[0].innerText);
    numLikes ++;
    l[0].innerText = numLikes;
// Cuando se da clic en “Me gusta” para una de las definiciones se dispara una alarma indicando que te gusto la definición junto con el título de la misma.
    petname = elemento.parentElement.children[0].innerText;
    alert(petname + " was liked")
}

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const cloud = document.getElementById("cloud");

function jump() {
    if(dino.classList != "jump") {
     
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump")
        }, 300)
    }
}

let isAlive = setInterval(() => {
     // obtenemos la posicion del dino     
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // obtenemos la posicion del cactus 
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //detectamos colicion 
    if(cactusLeft <50 && cactusLeft >0 && dinoTop >= 120){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Perdiste!!',
        footer: '<a href="index.html">Volver a jugar!!</a>'
      })
      cactus.style.animation = "none";
      cloud.style.animation = "none";

    }
}, 10);


document.addEventListener("keydown" , function (e) {
    jump();
})


const cubeMap = {
    "cube1": "../assets/imgs/cobe-1.png",
    "cube2": "../assets/imgs/cobe-2.png",
    "cube3": "../assets/imgs/cobe-3.png",
    "cube4": "../assets/imgs/cobe-4.png",
    "cube5": "../assets/imgs/cobe-5.png",
    "cube6": "../assets/imgs/cobe-6.png"
}




// -------------//
const infoBtn = document.getElementById("infoBtn");


infoBtn.addEventListener("click", function() {
    const i = document.getElementById("infoTable");
    if(i.classList.contains("closed")){
        i.style.display = "block"
        i.classList.remove("closed");
        i.classList.add("open")
    }
    else{
        i.classList.remove("open");
        i.classList.add("closed");
        i.style.display = "none"
    }
})

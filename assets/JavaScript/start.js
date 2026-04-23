const btn = document.getElementById("btn");


btn.addEventListener("click", function (){
    const names = document.getElementById("nameDiv").querySelectorAll('.player');
    console.log(names);

    for(var i in names ){
        if(names[i].value == ""){
            alert("Prosím, zadej své jméno");
            return;
        }
        localStorage.setItem("nameValue", names[i].value);
        console.log(names[i].value)
        console.log(localStorage);
    }
        
    //window.location.href = "../web/game.html";
            

})
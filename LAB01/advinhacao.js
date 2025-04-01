let num = Math.floor(Math.random() * 100)

function advinhar(){
    const chute = parseInt(document.getElementById("chute").value);
    const resultado = document.getElementById("resultado");


if (chute === num){
    resultado.innerText = "Parabéns, acertou!";
    resultado.style.setProperty("background-color", "green");
}
 
else if (chute < num){
    resultado.innerText = "Número muito baixo!";
    resultado.style.setProperty("background-color", "red");
}

else{
    resultado.innerText = "Número muito alto!";
    resultado.style.setProperty("background-color", "red");
}

}
let gerar = Math.random() * 100
let round = Math.floor(gerar)
let resp = document.getElementById('advinhacao').value

function check(){
    if(resp > round){
        document.getElementById('num').innerHTML =
        " número menor "
    }
}



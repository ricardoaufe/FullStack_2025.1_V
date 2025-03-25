let p1 = document.getElementById('p1').innerHTML;
console.log(p1)

document.getElementById('p1').innerHTML = "Olá Mundo!" /** alterando o valor de p1 pelo javascript */

//*let nome = prompt("Qual o seu nome?")
//let idade = prompt("Qual a sua idade?")
//let ano_atual = 2025;
//let ano_nascimento = ano_atual - idade;

//let response = 
    //'ola ' + nome + " seu ano de nascimento é " + ano_nascimento + '!';
//document.getElementById('ex1').innerHTML = response

function mensagem(msg){
    console.log(msg);
}

mensagem('OLÁ');
mensagem('TUDO BEM?');

function soma(a, b){    
    let c = a + b;
    console.log("A soma de " + a + " e " + b + " é igual a " + c);
    return c;
}
let c = soma(3, 4);

function ex2(){
    let num = (document.getElementById('ex2_in').value);
    console.log("incrementos até: " + num);
    for(let i = 0; i <= num; i++){
    console.log(i);
    }
}   


function ex4(){
    let num1 = parseInt(document.getElementById('ex4_1').value);
    let num2 = parseInt(document.getElementById('ex4_2').value);

    let result = 0;
    if(num1 < 0 || num2 < 0){
        result = soma(num1, num2);    
    }else{
    result = multi(num1, num2);
    }
    document.getElementById('ex4_resp').innerHTML = 
        "O resuldado é: "  + result;
}


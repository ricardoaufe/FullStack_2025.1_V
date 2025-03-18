//window.alert("hello world!")
console.log("hello world!")

//let nome = prompt("Qual o seu nome?")
//console.log(nome);


console.log("while")
let i = 0;
while(i<10){
    console.log(i);
    //i++; é a mesma coisa que i = 1 + 1; e i += 1;
    i += 1
}

for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log('Exercicio 1')
for(let i = 1; i < 100; i += 2){
    console.log(i);
}

console.log('Exercicio 2')
for(let i = 5; i <= 500; i += 5){
    console.log(i)
}

//console.log('Exercicio 3')
//let x = parseInt(prompt("Digite um númeo inteiro"));
//for(let i = x; i >= 0; i--){
//    console.log(i);
//}

console.log('exercicio 4')
let num = parseInt(prompt("digite um numero inteiro"))
if(num < 0){
    console.log("numero invalido")
}

let mult = 1;
for(let i = num; i > 0; i--){
    mult *= i;
    console.log(i, mult);
}

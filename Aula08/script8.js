// let carro = {
//     cor: 'green',
//     modelo: 'SUV',
//     marca: 'Toyota',
//     buzina: function(){
//         return 'bi bi';
//     }
// };

// let carro2 = {
//     cor: 'black',
//     modelo: 'SUV',
//     marca: 'Ford',
//     buzina: function(){
//         return 'fom fom';
//     }
// };

class Carro{
    constructor(cor, modelo, marca){ // constructor é uma função como qualquer outra *** porém **** não precisa ser chamada
        this.cor = cor;
        this.modelo = modelo;
        this.marca = marca;
    }
    buzina(){
        return 'bi bi'
    }
}

let carro1 = new Carro('green', 'SUV', 'Toyota');
let carro2 = new Carro('black', 'SUV', 'Ford');

console.log(carro1);
console.log(carro2);

// console.log(carro);
// console.log(carro.cor);

// console.log(carro2);
// console.log(carro2.cor);

// console.log(carro.buzina());
// console.log(carro2.buzina());

let carros = [] // lista inicialmente vazia
carros.push(carro1); // add carro
carros.push(carro2); // add carro2
for(let i = 0; i < carros.length; i++){ // o i vale 0 inicialmente até imprimir todos os carros
    console.log(carros[i].buzina())// imprime a buzina de cada carro em i
}




class Retangulo{
    constructor(corLinha,cor,widthLinha,x,y,largura,altura){
        this.corLinha = corLinha;
        this.cor = cor;
        this.widthLinha = widthLinha;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }
    desenhe(contexto){
        contexto.beginPath();
        contexto.lineWidth = this.widthLinha;
        contexto.fillStyle = this.cor;
        contexto.strokeStyle = this.corLinha;
        contexto.fillRect(this.x,this.y,this.largura,this.altura);
        contexto.closePath();
    }
}

let canvas = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

let retangulo1 = new Retangulo('black', 'black', 3, 0, 0, 20, 20);
let retangulo2 = new Retangulo('blue', 'yellow', 3, 200, 200, 20, 20);
let retangulo3 = new Retangulo('red', 'red', 3, 270, 270, 20, 20);


function animacao(){
    if(retangulo1.x == 400){
        retangulo1.x = 0;
    }

    retangulo1.x += 1;

    ctx1.clearRect(0,0,400,400) 

    retangulo1.desenhe(ctx1);
    retangulo2.desenhe(ctx1);
    retangulo3.desenhe(ctx1)

    requestAnimationFrame(animacao);
 
}  

animacao()

document.addEventListener('keydown', function(evento){
    let tecla = evento.key;
   
    let velocidade = 10;
    if(tecla == 'ArrowUp'){retangulo2.y -=velocidade}
    if(tecla == 'ArrowDown'){retangulo2.y +=velocidade}
    if(tecla == 'ArrowLeft'){retangulo2.x -=velocidade}
    if(tecla == 'ArrowRight'){retangulo2.x +=velocidade}
    
})

document.addEventListener('mousemove', function(evento){
    let rect = canvas1.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    
    retangulo3.x = x_mouse;
    retangulo3.y = y_mouse;
    
})
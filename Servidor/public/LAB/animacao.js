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

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let retangulo = new Retangulo('blue', 'red', 3, 200, 200, 20, 20);

document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left; 
    let y_mouse = evento.clientY - rect.top;

    retangulo.x = x_mouse - retangulo.largura / 2; // divide por 2 para centralizar o mouse
    retangulo.x = x_mouse - retangulo.largura / 2; // divide por 2 para centralizar o mouse
    
    retangulo.x = Math.min(Math.max(0, x_mouse - retangulo.largura / 2), canvas.width - retangulo.largura);
    retangulo.y = Math.min(Math.max(0, y_mouse - retangulo.altura / 2), canvas.height - retangulo.altura);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    retangulo.desenhe(ctx);
});


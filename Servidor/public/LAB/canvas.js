let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1 ? canvas1.getContext('2d') : null;

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2 ? canvas2.getContext('2d') : null;

if (!ctx1 || !ctx2) {
    console.error('Canvas elements with IDs "canvas1" and/or "canvas2" are missing.');
}

function forma(ctx, cor, coordenada) {
    const [x, y, largura, altura] = coordenada;
    ctx.lineWidth = 2;
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

function escrever(ctx, texto, coordenada) {
ctx.font = '20px Arial';
ctx.fillText(texto, coordenada[0], coordenada[1]);
}


function linha(ctx, cor, inicio, fim) {
    const [x1, y1] = inicio;
    const [x2, y2] = fim;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = cor;
    ctx.stroke();
    ctx.closePath();
}

function arco(ctx, cor, [x, y, raio, angInicial, angFinal, sentido], borderCor) {
    ctx.beginPath();
    ctx.arc(x, y, raio, angInicial, angFinal, sentido);
    if (cor != 'transparent') {
        ctx.fillStyle = cor;
        ctx.fill();
    }
    ctx.strokeStyle = borderCor ?? cor;
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();
}

function drawCanvas1() {
    escrever(ctx1, 'Canvas', [110, 50]);

    forma(ctx1, 'blue', [0, 0, 50, 50]);
    forma(ctx1, 'red', [250, 0, 50, 50]);
    forma(ctx1, 'red', [115, 150, 35, 35]);
    forma(ctx1, 'yellow', [0, 250, 25, 50]);
    forma(ctx1, 'yellow', [25, 275, 25, 25]);
    forma(ctx1, 'black', [250, 275, 25, 25]);
    forma(ctx1, 'black', [275, 250, 25, 50]);
    forma(ctx1, 'aquamarine', [0, 125, 20, 50]);
    forma(ctx1, 'aquamarine', [275, 138, 26, 26]);

    linha(ctx1, 'green', [0, 150], [300, 150]);
    linha(ctx1, 'blue', [0, 0], [150, 150]);
    linha(ctx1, 'red', [300, 0], [150, 150]);
    linha(ctx1, 'grey', [150, 150], [150, 300]);

    arco(ctx1, 'yellow', [80, 220, 15, 0, 2 * Math.PI], 'green');
    arco(ctx1, 'yellow', [220, 220, 15, 0, 2 * Math.PI], 'green');
    arco(ctx1, 'aquamarine', [150, 110, 15, 0, 2 * Math.PI], 'blue');
    arco(ctx1, 'aquamarine', [150, 300, 40, 0, 2 * Math.PI], 'green');
    arco(ctx1, 'transparent', [150, 300, 75, 0, 3 * Math.PI / 2], 'green');
    arco(ctx1, 'transparent', [150, 300, 60, 0, 3 * Math.PI / 2, true], 'green');
    arco(ctx1, 'transparent', [150, 150, 60, 0, Math.PI, true], 'green');
    /** arco(ctx1, 'transparent', [150, 150, 75, 0,5* Math.PI/6, true], 'green'); Não consegui enquadrar o semi-círculo */
}

drawCanvas1();

function drawCanvas2() {

    ctx2.beginPath();
    ctx2.moveTo(145, 200);
    ctx2.lineTo(195, 150); 
    ctx2.lineTo(245, 200); 
    ctx2.closePath();
    ctx2.fillStyle = 'tomato'; 
    ctx2.fill();
    
    

    forma(ctx2, 'grey', [0, 300, 400, 100]); /**chao */
    forma(ctx2, 'brown', [145, 200, 100, 100]);
    forma(ctx2, 'brown', [350, 300, 20, 50]);
    forma(ctx2, 'brown', [50, 250, 20, 50]);
    forma(ctx2, 'black', [185, 250, 20, 50]);
    forma(ctx2, 'lightblue', [155, 220, 30, 30]);
    forma(ctx2, 'lightblue', [205, 220, 30, 30]);
    linha(ctx2, 'pink', [100, 20], [180, 100]); /**triangulo */
    linha(ctx2, 'pink', [100, 20], [260, 20]);
    linha(ctx2, 'pink', [260, 20], [13, 100]);
    forma(ctx2, 'oceanblue', [0, 300, 50, 100]);
    forma(ctx2, 'oceanblue', [0, 350, 150, 50]);


    arco(ctx2, 'oceanblue', [150, 400, 50, 0, 2 * Math.PI]);
    arco(ctx2, 'oceanblue', [0, 300, 50, 0, 2 * Math.PI]);
    arco(ctx2, 'yellow', [310, 100, 50, 0, 2 * Math.PI]);
    arco(ctx2, 'green', [360, 290, 30, 0, 2 * Math.PI]);
    arco(ctx2, 'green', [60, 230, 30, 0, 2 * Math.PI]);

    


}

drawCanvas2();
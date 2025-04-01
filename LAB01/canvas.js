let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function forma(cor, coordenada){
    const [x, y, largura, altura] = coordenada
    ctx.beginPath();
    ctx.lineWidth= 2;
    ctx.fillStyle=cor;
    ctx.fillRect(x, y, largura, altura);
    ctx.closePath();
}

function linha(cor, inicio, fim){
    const [x1, y1] = inicio
    const [x2, y2] = fim
    ctx.beginPath();
    ctx.lineWidth= 2;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = cor;
    ctx.stroke();
    ctx.closePath();
}

forma('blue', [0, 0, 50, 50])
forma('red', [250, 0, 50, 50])
forma('red', [115, 150, 35, 35])
forma('yellow', [0, 250, 25, 50])
forma('yellow', [25, 275, 25, 25])
forma('black', [250, 275, 25, 25])
forma('black', [275, 250, 25, 50])
forma('aquamarine', [0, 125, 25, 50])
forma('aquamarine', [275, 138, 26, 26])


linha('green', [0, 150], [300, 150])
linha('blue', [0, 0], [150, 150])
linha('red', [300, 0], [150, 150])
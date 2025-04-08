class Circulo{
    constructor(cor, [x, y, raio, angInicial, angFinal], borderCor){
        this.cor = cor;
        this.x = x;
        this.y = y;
        this.raio = raio;
        this.angInicial = angInicial;
        this.angFinal = angFinal;
        this.borderCor = borderCor;
    }
    desenhe(ctx){
        ctx.beginPath(); // colocar todos os parametros do arco
    }
}
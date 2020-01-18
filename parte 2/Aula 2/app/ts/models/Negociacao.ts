export class Negociacao {

    // usamos o readonly e removemos os getters
    /* toda vez que quisermos criar um objeto em que depois não poderemos alterar os dados daquele objeto, colocamos
    suas propriedades como readonly */
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){}

    // para conseguir os dados do volume
    get volume(): number {return this.quantidade * this.valor;}
    
}
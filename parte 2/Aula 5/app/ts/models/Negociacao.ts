import { MeuObjeto } from "./index";

export class Negociacao implements MeuObjeto<Negociacao>{

    // usamos o readonly e removemos os getters
    /* toda vez que quisermos criar um objeto em que depois não poderemos alterar os dados daquele objeto, colocamos
    suas propriedades como readonly */
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){}

    // para conseguir os dados do volume
    get volume(): number {return this.quantidade * this.valor;}

    
    // imprimir no console log uma negociação
    paraTexto(): void{
        console.log(
            `Impressão de Negociação:
             Data: ${this.data}
             Quantidade: ${this.quantidade}
             Valor: ${this.valor}
             Volume: ${this.volume}`
        );
    }


    // comparar se já existe essa negociação
    Igual(negociacao: Negociacao): boolean {
        return this.data.getDate() == negociacao.data.getDate() &&
            this.data.getMonth() == negociacao.data.getMonth() && 
            this.data.getFullYear() == negociacao.data.getFullYear();
    }    
    
}
// importando o módulo Negociação
import {Negociacao, MeuObjeto } from './index';

export class Negociacoes implements MeuObjeto<Negociacoes>{

    private _negociacoes: Negociacao[] = [];


    // adicionar uma negociação no array de negociações
    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    
    /* conseguir o array de negociações, usamos o [].concat para que seja criado um novo array 
    com os dados identicos ao de negociacoes, sem que o de negociacoes seja modificado */
    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }


    // imprimir no console log
    paraTexto(): void {
        console.log(`Impressão de Negociações: `);
        console.log(JSON.stringify(this._negociacoes));
    }


    // comparar se já existe essa negociação
    Igual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}
// importando o módulo Negociação
import {Negociacao } from './Negociacao';

export class Negociacoes {

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
}
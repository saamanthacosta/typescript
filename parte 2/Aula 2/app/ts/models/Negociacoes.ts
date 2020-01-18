// importando o módulo Negociação
import {Negociacao } from './Negociacao';

export class Negociacoes {

    // poderiamos declarar: private _negociacoes: Array<Negociacao> = []; tipo Array<T> onde T é o tipo do array
    private _negociacoes: Negociacao[] = [];


    // adicionar uma negociação no array de negociações
    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    
    /* conseguir o array de negociações, usamos o [].concat para que seja criado um novo array 
    com os dados identicos ao de negociacoes, sem que o de negociacoes seja modificado */
    paraArray(): Negociacao[] {
        // colocamos o ([] as Negociacao[]) pois começou a dar erro dps do tsconfig usar o modulo q impede o undefined
        // se nao tipamos o [].concat, ele irá poder concatenar qualquer coisa
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}
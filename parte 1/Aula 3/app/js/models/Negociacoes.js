class Negociacoes {
    constructor() {
        // poderiamos declarar: private _negociacoes: Array<Negociacao> = []; tipo Array<T> onde T é o tipo do array
        this._negociacoes = [];
    }
    // adicionar uma negociação no array de negociações
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    /* conseguir o array de negociações, usamos o [].concat para que seja criado um novo array
    com os dados identicos ao de negociacoes, sem que o de negociacoes seja modificado */
    paraArray() {
        return [].concat(this._negociacoes);
    }
}

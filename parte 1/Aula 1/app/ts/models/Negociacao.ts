class Negociacao {

    // em TS precisamos declarar essas variáveis, declaramos como privadas para impedir o acesso a esses dados
    private _data; 
    private _quantidade; 
    private _valor;

    // usamos _ para impedirmos que outras pessoas acessem essas propriedades
    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}
export class Negociacao {

    // usamos _ para impedirmos que outras pessoas acessem essas propriedades
    constructor(private _data: Date, private _quantidade: number, private _valor: number){}

    // para conseguir os dados da data
    get data(): Date {return this._data;}

    // para conseguir os dados da quantidae
    get quantidade(): number {return this._quantidade; }

    // para conseguir os dados do valor
    get valor(): number {return this._valor;}

    // para conseguir os dados do volume
    get volume(): number {return this._quantidade * this._valor;}
    
}
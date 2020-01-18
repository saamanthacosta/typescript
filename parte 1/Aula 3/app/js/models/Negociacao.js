class Negociacao {
    // usamos _ para impedirmos que outras pessoas acessem essas propriedades
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    // para conseguir os dados da data
    get data() {
        return this._data;
    }
    // para conseguir os dados da quantidae
    get quantidade() {
        return this._quantidade;
    }
    // para conseguir os dados do valor
    get valor() {
        return this._valor;
    }
    // para conseguir os dados do volume
    get volume() {
        return this._quantidade * this._quantidade;
    }
}

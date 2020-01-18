class View {
    // esse seletor está recebendo uma string (o id da div (linha 39) do index.html)
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
}

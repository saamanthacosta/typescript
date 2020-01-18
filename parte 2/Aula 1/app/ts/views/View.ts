export abstract class View<T> {
    
    // usaremos o any pois estamos utilizando a lib jquery 
    private _elemento: JQuery;

    // esse seletor está recebendo uma string (o id da div (linha 39) do index.html)
    constructor(seletor: string) {
        // this._elemento = document.querySelector(seletor);
        this._elemento = $(seletor);
    }

    // irá exibir na tela
    update(modelo: T): void {
        // this._elemento.innerHTML = this.template(modelo);
        this._elemento.html(this.template(modelo));
    }

    abstract template(modelo: T): string;
}


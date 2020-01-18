// significa que ela vai trabalhar com o tipo T (pode ser qualquer coisa) 
abstract class View<T> {

    // usaremos o Element, que é do tipo genérico pois podemos passar qualquer elemento pelo seletor
    // protected: os pais e filhos podem usar 
    private _elemento: Element;

    // esse seletor está recebendo uma string (o id da div (linha 39) do index.html)
    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    // irá exibir na tela
    update(modelo: T): void {
        this._elemento.innerHTML = this.template(modelo);
    }

    abstract template(modelo: T): string;
}

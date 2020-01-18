export abstract class View<T> {
    
    // usaremos o any pois estamos utilizando a lib jquery 
    private _elemento: JQuery;

    private _escapar: boolean;

    // esse seletor está recebendo uma string (o id da div (linha 39) do index.html)
    /* escapar?: boolean => a interrogação serve para mostrar que o segundo parametro é opcional 
    (opcional sempre por último) quando o boolean nao recebe dado, ele assume false */
    // colocamos o escapar: boolean = false para falar q se nao for passado um parametro, ele irá assumir falso
    // houve a modificação pois inserimos no tsconfig o módulo que impede usar variáveis com undefined/null
    constructor(seletor: string, escapar: boolean = false) {
        // this._elemento = document.querySelector(seletor);
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    // irá exibir na tela
    update(modelo: T): void {

        let template = this.template(modelo);
        if (this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        // this._elemento.innerHTML = this.template(modelo);
        this._elemento.html(this.template(modelo));
    }

    abstract template(modelo: T): string;
}


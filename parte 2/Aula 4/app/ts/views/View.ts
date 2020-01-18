import { logarTempoDeExecucao } from '../helpers/decorators/index';

export abstract class View<T> {
    
    // usaremos o any pois estamos utilizando a lib jquery 
    private _elemento: JQuery;

    private _escapar: boolean;

    // esse seletor está recebendo uma string (o id da div (linha 39) do index.html)
    // colocamos o escapar: boolean = false para falar q se nao for passado um parametro, ele irá assumir falso
    // houve a modificação pois inserimos no tsconfig o módulo que impede usar variáveis com undefined/null
    constructor(seletor: string, escapar: boolean = false) {
        // this._elemento = document.querySelector(seletor);
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    @logarTempoDeExecucao()
    // irá exibir na tela
    update(modelo: T): void {

        let template = this.template(modelo);
        if (this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(this.template(modelo));
    }

    abstract template(modelo: T): string;
}


class NegociacaoController {

    // private para impedir que acessem/ modifiquem esses dados
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;

    constructor() {
        // o <> é utilizado para casting: mudaremos o tipo da variável do document.querySelector para o HTMLInputElement
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
    }

    
    adiciona(event: Event) {   // event do tipo Evento 
        // prevençao de eventos comuns, como de atualizar a página após um click
        event.preventDefault();
        
        // criação da constante negociação
        const negociacao = new Negociacao(
            // a data vai receber os dados do objeto Date
            /* a data será lida como dd-mm-aaaa e o Date le como dd,mm,aaaa
            pra prevenirmos erros usaremos o replace, que irá substituir os - por , */
            new Date(this._inputData.value.replace(/-/g, ',')), 
            // o parseInt e parseFloat são inseridos pois o TS continuava dando erro com a tipagem
            parseInt(this._inputQuantidade.value), 
            parseFloat(this._inputValor.value));

    }
}
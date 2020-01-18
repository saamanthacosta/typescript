class NegociacaoController {

    // private para impedir que acessem/ modifiquem esses dados
    // colocamos o tipo como JQuery, já que estamos usando sua lib e ela entende dos comandos de HTML
    /*  private _inputData: HTMLInputElement;
        private _inputQuantidade: HTMLInputElement;
        private _inputValor: HTMLInputElement; 
    */
    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    // podemos remover o tipo Negociacoes pois o TS infere como tipo da variável aquela em que estamos a referenciando
    // poderiamos declarar como: private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoes = new Negociacoes();
    private _negociacoesview = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');


    constructor() {
        // removemos o document.querySelector por $ e tiramos a tipagem que estava antes
        /*  this._inputData = <HTMLInputElement>document.querySelector('#data');
            this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
            this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        */
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        // irá exibir na tabela algo em branco já que nao teremos nenhuma negociação dentro do array 
        this._negociacoesview.update(this._negociacoes);
    }

    
    adiciona(event: Event): void {   // event do tipo Evento 
        // prevençao de eventos comuns, como de atualizar a página após um click
        event.preventDefault();
        
        // criação da constante negociação
        const negociacao = new Negociacao(
            // a data vai receber os dados do objeto Date
            /* a data será lida como dd-mm-aaaa e o Date le como dd,mm,aaaa
            pra prevenirmos erros usaremos o replace, que irá substituir os - por , */
            // estavam antes com .value, o val() é um comando da lib do JQuery 
            new Date(this._inputData.val().replace(/-/g, ',')), 
            // o parseInt e parseFloat são inseridos pois o TS continuava dando erro com a tipagem
            parseInt(this._inputQuantidade.val()), 
            parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);

        // irá exibir na tabela os dados do array de negociações
        this._negociacoesview.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}
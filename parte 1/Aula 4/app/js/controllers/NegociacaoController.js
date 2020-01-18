class NegociacaoController {
    constructor() {
        // podemos remover o tipo Negociacoes pois o TS infere como tipo da variável aquela em que estamos a referenciando
        // poderiamos declarar como: private _negociacoes: Negociacoes = new Negociacoes();
        this._negociacoes = new Negociacoes();
        this._negociacoesview = new NegociacoesView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        // o <> é utilizado para casting: mudaremos o tipo da variável do document.querySelector para o HTMLInputElement
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        // irá exibir na tabela algo em branco já que nao teremos nenhuma negociação dentro do array 
        this._negociacoesview.update(this._negociacoes);
    }
    adiciona(event) {
        // prevençao de eventos comuns, como de atualizar a página após um click
        event.preventDefault();
        // criação da constante negociação
        const negociacao = new Negociacao(
        // a data vai receber os dados do objeto Date
        /* a data será lida como dd-mm-aaaa e o Date le como dd,mm,aaaa
        pra prevenirmos erros usaremos o replace, que irá substituir os - por , */
        new Date(this._inputData.value.replace(/-/g, ',')), 
        // o parseInt e parseFloat são inseridos pois o TS continuava dando erro com a tipagem
        parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        // irá exibir na tabela os dados do array de negociações
        this._negociacoesview.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}

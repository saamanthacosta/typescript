import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacao, Negociacoes } from './../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/index';

export class NegociacaoController {

    // private para impedir que acessem/ modifiquem esses dados
    // colocamos o tipo como JQuery, já que estamos usando sua lib e ela entende dos comandos de HTML
    // iremos criar decorators para cada um dos inputs a fim de evitar a leitura do dom várias vezes
    @domInject('#data')
    private _inputData: JQuery;
    @domInject('#quantidade')
    private _inputQuantidade: JQuery;
    @domInject('#valor')
    private _inputValor: JQuery;
    // podemos remover o tipo Negociacoes pois o TS infere como tipo da variável aquela em que estamos a referenciando
    private _negociacoes = new Negociacoes();
    private _negociacoesview = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _service = new NegociacaoService();


    constructor() {
        // irá exibir na tabela algo em branco já que nao teremos nenhuma negociação dentro do array 
        this._negociacoesview.update(this._negociacoes);
    }

    adiciona(event: Event): void {    
        // prevençao de eventos comuns, como de atualizar a página após um click
        event.preventDefault();

        // testar se a data inserida foi em um sábado ou domingo, impedindo de adicionar a negociação caso isso aconteça
        let data = new Date(this._inputData.val().replace(/-/g, ','));
        if (!this._DiaUtil(data)){
            // será exibida a seguinte mensagem caso seja sábado ou domingo:
            this._mensagemView.update('Negociações somente em dias úteis!');
            return
        }
        
        // criação da constante negociação
        const negociacao = new Negociacao(
            // a data vai receber os dados do objeto Date
            /* a data será lida como dd-mm-aaaa e o Date le como dd,mm,aaaa
            pra prevenirmos erros usaremos o replace, que irá substituir os - por , */
            new Date(this._inputData.val().replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.val()), 
            parseFloat(this._inputValor.val())
        );
        
        // adicionar um input de negociação no array de negociações
        this._negociacoes.adiciona(negociacao);

        // impressão no console.log
        imprime(negociacao, this._negociacoes);

        // irá exibir na tabela os dados do array de negociações
        this._negociacoesview.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
    

    private _DiaUtil(data: Date){
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }


    // importar a API
    // decorator para tentar previnir os multiplos clicks
    @throttle()
    importarDados(){

        // validação da resposta com um status válido
        this._service.obterNegociacoes(res => {
            if(res.ok) { return res; } 
            else {throw new Error(res.statusText);}
        })
        // verificar se já foi importado ou não
        .then(negociacoesParaImportar => {
            // a constante negociacoesJaImportadas vai receber o array de negociacoes
            const negociacoesJaImportadas = this._negociacoes.paraArray();
            // filtro em que se a negociação já foi importada, não irá realizar nada
            negociacoesParaImportar
                .filter(negociacao => 
                    !negociacoesJaImportadas.some(jaImportada => 
                        negociacao.Igual(jaImportada)))
                // caso não exista a importação, a negociação será adicionada no array de negociações
                .forEach(negociacao => 
                this._negociacoes.adiciona(negociacao));

            this._negociacoesview.update(this._negociacoes);
        })
        .catch(err => { this._mensagemView.update(err.message);})
    }

}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
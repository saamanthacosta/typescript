import { NegociacaoAPI, Negociacao } from "../models/index";

export class NegociacaoService {

    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]>{
        
        // os primeiro 3 then irão ter acesso aos dados parseados
        return fetch('http://localhost:8080/dadosx')
            .then(res => handler(res))
            .then(res => res.json())
            // os dados serão adicionados na tabela 
            .then((dados: NegociacaoAPI[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            // caso ocorra um erro, o catch irá lidar com ele 
            .catch(err => { console.log(err);
            throw new Error('Não foi possível importar as negociações');}
            ); 
    }
}

export interface HandlerFunction {

    (res: Response): Response
}
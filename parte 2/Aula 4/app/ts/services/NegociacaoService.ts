import { NegociacaoAPI, Negociacao } from "../models/index";

export class NegociacaoService {

    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]>{
        
        // os primeiro 3 then irão ter acesso aos dados parseados
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            // os dados serão adicionados na tabela 
            .then((dados: NegociacaoAPI[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => console.log(err));
            // caso ocorra um erro, o catch irá lidar com ele  
    }
}

export interface HandlerFunction {

    (res: Response): Response
}
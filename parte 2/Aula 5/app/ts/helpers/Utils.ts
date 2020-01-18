import { Imprimivel } from "../models/index";

// função para imprimir no console log
// o ... serve para mostrar que poderá receber infinitos parametros, fazendo um array deles do tipo Imprimivel 
export function imprime(... objetos: Imprimivel[]){
    // para cada objeto que ele recebe como parametro, ele irá realizar um paraTexto do objeto
    objetos.forEach(objeto => objeto.paraTexto());
}
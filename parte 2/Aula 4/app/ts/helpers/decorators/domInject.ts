// lazyloading
export function domInject(seletor: string){

    // target: objeto o qual tem uma propriedade que queremos modificar
    return function(target: any, key: string){

        let elemento: JQuery;

        // irá buscar o id # para injetar no input
        const getter = function(){

            // busca o elemento do DOM quando o get for acessado pela primeira vez
             if(!elemento){
                 elemento = $(seletor);
             }

            // novos acessos retornarão o mesmo elemento
             return elemento;
        }

        Object.defineProperty(target, key, { get: getter });
    }
}
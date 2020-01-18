
export function logarTempoDeExecucao(emSegundos: boolean = false) {

    // o PropertyDescriptor sabe tudo sobre o método que está sendo chamado
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        // toda a lógica do método está guardada no metodoOriginal
        const metodoOriginal = descriptor.value; 

        // pode receber vários parametros e queremos ter acesso a todos (...args é o rest operator)
        descriptor.value = function(...args: any[]){
            let unidade = 'ms';
            let divisor = 1;
            if(emSegundos) {
                unidade = 's';
                divisor = 1000;
            }
            
            console.log('---------------');
            console.log(`parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            // o apply permite chamar o método no contexto com os parametros que querem passar
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
            console.log(`O método ${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}`);
            return retorno;
        }
        return descriptor;
    }
}
class NegociacoesView {
    // esse seletor está recebendo uma string (o id da div (linha 39) do index.html)
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
        // o innerHTML transforma esse elemento em um elemento do dom
        this._elemento.innerHTML;
    }
    // irá exibir a tabela 
    update(modelo) {
        this._elemento.innerHTML = this.template(modelo);
    }
    template(modelo) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${modelo.paraArray().map(negociacao => `
                    <tr>
                        <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>
                    `).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>          
        `;
    }
}

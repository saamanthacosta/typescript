// usamos o <> para dizer qual o tipo que vamos querer usar no T que está na View
// no caso, irá usar string
class MensagemView extends View<string> {

    template(modelo: string): string {
        return `<p class="alert alert-info">${modelo}</p>`;
    }
}
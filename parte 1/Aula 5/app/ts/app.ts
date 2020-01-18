const controller = new NegociacaoController();

// substitimos o código que está comentado por esse:
$('.form').submit(controller.adiciona.bind(controller));

// document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));
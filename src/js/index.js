//Passo 1 - Selecionar os elementos HTML
const botoesCarrossel = document.querySelectorAll('.botao');
const imagensCarrossel = document.querySelectorAll('.imagem')

//Passo 2 - Identificar o clique no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //Passo 3 - Desmarcar o botao anterior
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //Passo 4 - Marcar o botão clicado como selecionado
        botao.classList.add('selecionado');

        //Passo 5 - Esconder a imagem de fundo anterior
        const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove('ativa');

        //Passo 6 - Mostrar imagem de fundo correspondente
        imagensCarrossel[indice].classList.add('ativa')
    })
})

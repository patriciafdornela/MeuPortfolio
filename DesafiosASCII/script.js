// Função para girar o card
function flipCard(card) {
    card.classList.toggle("flip");
}

// Função para o botão de voltar ao topo
function btnVoltarParaInicio() {
    let botaoVoltarParaInicio = document.getElementById('botaoVoltarParaInicio');
    botaoVoltarParaInicio.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    btnVoltarParaInicio();
});

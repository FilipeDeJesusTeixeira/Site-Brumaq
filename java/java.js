let preVButton = document.getElementById("antes");
let nextButton = document.getElementById("depois");
let container = document.querySelector('.conteiner');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicadores');
let dots = indicator.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0; // O primeiro item será o ativo por padrão
let firstposition = 0;
let lastposition = items.length - 1;

function setslider() {
    // Remover a classe 'active' do item e do indicador anterior
    let itemold = container.querySelector('.list .item.active');
    if (itemold) {
        itemold.classList.remove('active');
        itemold.style.opacity = '0'; // Garantir que o item anterior desapareça
    }

    let dotsold = indicator.querySelector('ul li.active');
    if (dotsold) {
        dotsold.classList.remove('active');
    }

    // Adicionar a classe 'active' ao novo item e ao novo indicador
    items[active].classList.add('active');
    items[active].style.opacity = '1'; // Garantir que o item ativo tenha opacidade 1
    dots[active].classList.add('active');

    // Atualizar o número do indicador
    indicator.querySelector('.numeros').innerHTML = '0' + (active + 1);
}

// Função para o botão "próximo"
nextButton.onclick = () => {
    active = active + 1 > lastposition ? 0 : active + 1;
    setslider();  // Atualiza a exibição
};

// Função para o botão "anterior"
preVButton.onclick = () => {
    active = active - 1 < firstposition ? lastposition : active - 1;
    setslider();  // Atualiza a exibição
};

// Inicializa a exibição no primeiro item ao carregar a página
window.onload = () => {
    setslider();
};
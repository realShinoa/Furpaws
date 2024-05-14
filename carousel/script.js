let currentPanel = 1;
const panelWidth = 1100; // Largura de cada painel
const totalPanels = 4; // Número total de painéis

function changePanel(direction) {
    currentPanel += direction;

    if (currentPanel < 1) {
        currentPanel = totalPanels;
    } else if (currentPanel > totalPanels) {
        currentPanel = 1;
    }

    updateCarousel();
}

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const panelContainer = document.querySelector('.carousel-container');
    const translateValue = -panelWidth * (currentPanel - 1);
    carousel.style.transform = `translateX(${translateValue}px)`;
    panelContainer.style.width = `${panelWidth}px`; // Ajuste a largura do contêiner para mostrar apenas um painel
}

// Chame a função updateCarousel inicialmente para garantir que o carrossel inicie corretamente
updateCarousel();

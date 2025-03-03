// Seu código JavaScript existente
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu button');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    // Abrir o sidebar
    menuButton.addEventListener('click', function () {
        sidebar.style.left = '0'; // Mostrar o sidebar
    });

    // Fechar o sidebar
    closeBtn.addEventListener('click', function () {
        sidebar.style.left = '-300px'; // Esconder o sidebar
    });

    // Fechar o sidebar se o usuário clicar fora dele
    window.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            sidebar.style.left = '-300px'; // Esconder o sidebar
        }
    });
});

// Novo JavaScript adicionado abaixo
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os elementos do DOM
    const menuBtn = document.querySelector('.menu-btn'); // Botão para abrir o menu
    const closeBtn = document.querySelector('.close-btn'); // Botão para fechar o menu
    const sidebar = document.getElementById('sidebar'); // Menu lateral

    // Função para abrir o menu lateral
    function openSidebar() {
        sidebar.style.left = '0'; // Mostrar o sidebar
    }

    // Função para fechar o menu lateral
    function closeSidebar() {
        sidebar.style.left = '-300px'; // Esconder o sidebar
    }

    // Abrir o sidebar ao clicar no botão do menu
    menuBtn.addEventListener('click', openSidebar);

    // Fechar o sidebar ao clicar no botão de fechar
    closeBtn.addEventListener('click', closeSidebar);

    // Fechar o sidebar se o usuário clicar fora dele
    window.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            closeSidebar();
        }
    });
});
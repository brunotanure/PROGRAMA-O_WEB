
// JavaScript puro para alternar tema e validar formulário

// Elementos do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Botão de tema
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para carregar tema salvo no localStorage
    function loadTheme() {
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark');
            themeToggle.textContent = '☀️';
        }
    }

    // Função para alternar tema
    function toggleTheme() {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'enabled');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            themeToggle.textContent = '🌙';
        }
    }

    // Eventos do tema
    themeToggle.addEventListener('click', toggleTheme);
    loadTheme();

    // Validação do formulário de contato (apenas se existir)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Verifica campos obrigatórios
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos!');
                return false;
            }

            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Por favor, insira um email válido!');
                return false;
            }

            // Se válido, pode submeter (aqui simula envio)
            alert('Formulário enviado com sucesso!');
            // form.reset(); // Opcional: limpar formulário
        });
    }

    // Atualiza classe active no menu baseado na página atual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
// Alternar Tema Claro/Escuro
const toggleThemeBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
});

// Formulário de Contato
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Obrigado, ${nome}! Recebemos sua mensagem e responderemos em breve.`);
    contactForm.reset();
});

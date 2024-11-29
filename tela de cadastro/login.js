const toggleButton = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

document.addEventListener('DOMContentLoaded', function() {
    // Definir o tema inicial a partir do armazenamento local
    const savedTheme = localStorage.getItem('theme') || 'light';
    rootElement.classList.toggle('dark', savedTheme === 'dark');
    
    // Atualizar o emoji do botão no carregamento
    toggleButton.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
    
    // Alternar tema e atualizar o emoji
    toggleButton.addEventListener('click', () => {
        const isDark = rootElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggleButton.textContent = isDark ? '🌞' : '🌙';  // Trocar o emoji conforme o tema
    });

    // Função de validação de senha
    const senhaInput = document.getElementById('senha');
    const senhaAviso = document.getElementById('senha-aviso');

    function verificarSenha() {
        const senha = senhaInput.value;
        if (senha.length < 8) {
            senhaAviso.style.display = 'block';  // Exibe o aviso
        } else {
            senhaAviso.style.display = 'none';  // Esconde o aviso
        }
    }

    senhaInput.addEventListener('input', verificarSenha);

    // Lógica para o envio de feedback
    const btnEnvio = document.getElementById('btn-envio');
    const feedbackInput = document.getElementById('input-FeedBack');

    btnEnvio.addEventListener('click', function(event) {
        event.preventDefault();
        feedbackInput.value = "Obrigado!";
        feedbackInput.disabled = true;
        feedbackInput.style.backgroundColor = "rgb(36, 36, 41)";
        feedbackInput.style.color = "white";
    });
});

// Aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Selecionando os elementos
    const btnEnvio = document.getElementById('btn-envio');  // Botão de envio
    const feedbackInput = document.getElementById('input-FeedBack');  // Campo de feedback

    // Adicionando evento de clique no botão
    btnEnvio.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o envio de formulário, caso esteja dentro de um form

        // Atualizando o conteúdo do campo de feedback
        feedbackInput.value = "Obrigado!";  // Muda o valor para "Obrigado!"

        // Desabilitando o campo de input para impedir novas alterações
        feedbackInput.disabled = true;

        // Opcional: Você pode mudar o estilo do campo para indicar que ele foi desabilitado
        feedbackInput.style.backgroundColor = "rgb(36, 36, 41)"; // Cor de fundo neutra para indicar desabilitado
        feedbackInput.style.color = "white";  // Cor do texto para indicar que não pode ser alterado
    });
});
// Aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Selecionando os elementos
    const senhaInput = document.getElementById('senha');  // Campo de senha
    const senhaAviso = document.getElementById('senha-aviso');  // Elemento de aviso da senha

    // Função para verificar a senha
    function verificarSenha() {
        const senha = senhaInput.value;

        // Verificar se a senha tem menos de 8 caracteres
        if (senha.length < 8) {
            senhaAviso.style.display = 'block';  // Exibe o aviso
        } else {
            senhaAviso.style.display = 'none';   // Esconde o aviso se a senha for válida
        }
    }

    // Adiciona um evento para verificar a senha a cada digitação
    senhaInput.addEventListener('input', verificarSenha);
});

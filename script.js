// Executa o script quando o conteúdo do DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o botão de troca de tema e o elemento body
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Função para alternar a classe 'dark-mode' no body
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        
        // Salva a preferência do usuário no localStorage para manter a escolha
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };
    
    // Função para carregar o tema salvo pelo usuário ao abrir a página
    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
    };

    // Adiciona o evento de clique ao botão para chamar a função toggleTheme
    themeToggleButton.addEventListener('click', toggleTheme);
    
    // Carrega o tema preferido assim que a página é iniciada
    loadTheme();

    // Mensagem de confirmação no console do navegador (útil para depuração)
    console.log("Portfólio carregado com sucesso! Script de interatividade ativo.");
});

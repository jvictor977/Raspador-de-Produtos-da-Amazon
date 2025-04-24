document.addEventListener('DOMContentLoaded', () => {
    const keywordInput = document.getElementById('keyword');
    const scrapeButton = document.getElementById('scrapeButton');
    const resultsContainer = document.getElementById('results');

    scrapeButton.addEventListener('click', async () => {
        const keyword = keywordInput.value.trim();

        if (!keyword) {
            resultsContainer.innerHTML = '<p class="error-message">Por favor, digite uma palavra-chave.</p>';
            return;
        }

        resultsContainer.innerHTML = '<p>Buscando produtos...</p>';

        try {
            // Garanta que a URL esteja correta e apontando para o seu servidor backend
            const response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);
            const data = await response.json();

            if (response.ok) {
                // ... (seu código de tratamento dos resultados)
            } else {
                resultsContainer.innerHTML = `<p class="error-message">Erro ao buscar os dados: ${data.error || response.statusText}</p>`;
            }

        } catch (error) {
            console.error('Erro na requisição:', error);
            resultsContainer.innerHTML = '<p class="error-message">Ocorreu um erro ao comunicar com o servidor.</p>';
        }
    });
});
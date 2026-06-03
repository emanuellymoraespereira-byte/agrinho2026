// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    const botao = document.getElementById("btnCalcular");
    const resultadoDiv = document.getElementById("resultado");
    const litrosSpan = document.getElementById("litros");

    // Evento de clique
    botao.addEventListener("click", function() {
        // Cálculo hipotético: Economia média de 40.000 litros por hectare/dia
        // dependendo da cultura e clima ao usar gotejamento vs aspersão tradicional.
        const litrosPoupados = 40000;

        // Insere o valor formatado no HTML
        litrosSpan.textContent = litrosPoupados.toLocaleString('pt-BR');

        // Mostra a div de resultado com efeito simples
        resultadoDiv.style.display = "block";
        
        // Desabilita o botão após o clique para suavizar a experiência
        botao.textContent = "Simulado com Sucesso!";
        botao.style.backgroundColor = "#74c69d";
        botao.disabled = true;
    });
});

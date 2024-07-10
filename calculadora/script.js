// Função para calcular o valor líquido do vendedor após as taxas de comissão
function calcularValorLiquido() {
    const valorVenda = parseFloat(document.getElementById("valorVenda").value.replace(",", "."));
    const taxaComissao = parseFloat(document.getElementById("taxaComissao").value.replace(",", "."));
    const tarifaFixa = parseFloat(document.getElementById("tarifaFixa").value.replace(",", "."));
  
    const valorComissao = (valorVenda * (taxaComissao / 100)) + tarifaFixa;
    const valorLiquido = valorVenda - valorComissao;
  
    document.getElementById("valorLiquido").textContent = "R$ " + valorLiquido.toFixed(2);
    document.getElementById("valorPerdido").textContent = "R$ " + valorComissao.toFixed(2);
  
    // Exibir o resultado
    document.getElementById("resultado").classList.remove("hidden");
  }
  
  // Lidar com o envio do formulário
  document.getElementById("calcForm").addEventListener("submit", function(event) {
    event.preventDefault();
    calcularValorLiquido();
  });
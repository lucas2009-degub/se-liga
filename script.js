// Seleciona os botões e o parágrafo de mensagem pelo ID
const botaoMensagem = document.getElementById("btn-mensagem");
const textoResposta = document.getElementById("texto-resposta");
const botaoTema = document.getElementById("btn-tema");

// Função que exibe uma mensagem na tela ao clicar
function exibirMensagem() {
  textoResposta.textContent = "Bem-vindo(a) ao meu Portfólio Digital! Site publicado com sucesso.";
}

// Função que alterna a classe de cor no body
function alternarCor() {
  document.body.classList.toggle("tema-escuro");
}

// Eventos de clique conectados às funções
botaoMensagem.addEventListener("click", exibirMensagem);
botaoTema.addEventListener("click", alternarCor);
// 1. Pega os elementos do HTML pelo ID
const botao = document.getElementById("btn-mensagem");
const texto = document.getElementById("texto-resposta");

// 2. Cria a função que exibe a mensagem na tela
function exibirMensagem() {
  texto.textContent = "Interatividade funcionando!";
}

// 3. Dispara a função quando o botão recebe um clique
botao.addEventListener("click", exibirMensagem);
function alterarCor() {
  document.body.style.backgroundColor = "#dbeafe";
}
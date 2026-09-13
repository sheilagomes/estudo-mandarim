let listaDePalavras = [];
let frases = [];
let perguntas = [];

let novoIndice = 0;
let indicePergunta = 0;
let botaoSelecionado = "";
let mostraHanzi = [];
let fraseInicial = 0;
let fraseTraduzidaFinal = [];
let quantidadeDeHanziCertos = 0;

const containerHanzi = document.getElementById("frases-hanzi");
const botaoAleatorio = document.querySelector(".ale");
const botaoFrases = document.querySelector(".fra");
const botaoPerguntas = document.querySelector(".per");
const botaoProximo = document.querySelectorAll(".botao-proximo");
const botaoInicio = document.querySelectorAll(".botao-inicio");
const botaoVoltar = document.querySelector(".botao-voltar");
const menuSuspenso = document.querySelector(".botao-menu");
const audioSom = document.getElementById("audio-volume");
const botaoSom = document.getElementById("botao-som");
const botaoFicha = document.getElementById("botao-ficha");
const menuPaginas = document.querySelector(".menu-paginas");

function sorteio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function carregarDados() {
  return Promise.all([
    fetch("data/palavras.json").then((r) => r.json()),
    fetch("data/frases.json").then((r) => r.json()),
    fetch("data/perguntas.json").then((r) => r.json()),
  ]).then(([palavras, frasesData, perguntasData]) => {
    listaDePalavras = palavras;
    frases = frasesData;
    perguntas = perguntasData;
    novaFicha(listaDePalavras, novoIndice);
  });
}

function falar(texto) {
  if (!texto || !window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "zh-CN";
  utterance.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function tocarSom(palavra) {
  if (palavra.som) {
    const source = document.querySelector("#audio-volume source");
    source.src = `sounds/${palavra.som}`;
    audioSom.load();
    audioSom.play().catch(() => falar(palavra.hanzi));
  } else {
    falar(palavra.hanzi);
  }
}

function novaFicha(lista, indice) {
  const palavra = lista[indice];
  document.querySelector(".pinyin").textContent = palavra.pinyin;
  document.querySelector(".hanzi").textContent = palavra.hanzi;
  document.querySelector(".portugues").textContent = palavra.portugues;
  document.querySelector(".categoria").textContent = palavra.categoria;
  tocarSom(palavra);
}

function novaFraseTraducao() {
  fraseInicial = sorteio(0, frases.length - 1);
  document.querySelector(".frase-original").textContent = frases[fraseInicial].portugues;
  document.querySelector(".frase-pinyin").textContent = frases[fraseInicial].pinyin;
  document.querySelector(".frase-traduzida").textContent = "_";
  document.querySelector(".certo").style.opacity = "0";
  fraseTraduzidaFinal = [];
  quantidadeDeHanziCertos = 0;
  mostraHanzi = [];
  criaHanzi();
}

function novaPergunta() {
  indicePergunta = sorteio(0, perguntas.length - 1);
  const item = perguntas[indicePergunta];
  document.querySelector(".pergunta").textContent = item.perguntaHz;
  document.querySelector(".pergunta-pinyin").textContent = item.perguntaPy;
  document.querySelector(".pergunta-portugues").textContent = item.perguntaPt;
  document.querySelector(".resposta").textContent = "";
  document.querySelector(".resposta-pinyin").textContent = "";
}

function mostrarResposta() {
  const item = perguntas[indicePergunta];
  document.querySelector(".resposta").textContent = item.respostaPt;
  document.querySelector(".resposta-pinyin").textContent = item.respostaPy;
}

function viraFicha(...secoesParaOcultar) {
  document.querySelector(".flip-img .flip-img-inner").style.transform = "rotateY(180deg)";
  document.querySelector(".intro").style.display = "none";
  secoesParaOcultar.forEach((secao) => {
    const elemento = document.querySelector(`.${secao}`);
    if (elemento) elemento.style.display = "none";
  });
  if (menuPaginas) menuPaginas.style.display = "none";
}

function mostrarSecao(nomeSecao) {
  document.querySelectorAll(".flip-img-back").forEach((el) => {
    el.style.display = "none";
  });
  const secao = document.querySelector(`.flip-img-back.${nomeSecao}`);
  if (secao) secao.style.display = "";
}

function condicaoBotao() {
  if (botaoSelecionado === "ale") {
    novoIndice = sorteio(0, listaDePalavras.length - 1);
  } else {
    novoIndice = (novoIndice + 1) % listaDePalavras.length;
  }
}

function caracteresUnicos(texto) {
  return [...new Set(texto.replace(/\s/g, ""))];
}

function embaralhar(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = sorteio(0, i);
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function caractereDistrator(caracteresNecessarios) {
  let distrator = listaDePalavras[sorteio(0, listaDePalavras.length - 1)].hanzi;
  distrator = distrator[sorteio(0, distrator.length - 1)];
  while (caracteresNecessarios.includes(distrator)) {
    distrator = listaDePalavras[sorteio(0, listaDePalavras.length - 1)].hanzi;
    distrator = distrator[sorteio(0, distrator.length - 1)];
  }
  return distrator;
}

function configurarCliqueHanzi(elemento) {
  elemento.addEventListener("click", () => {
    const mandarim = frases[fraseInicial].mandarim.replace(/\s/g, "");
    const proximoCaractere = mandarim[quantidadeDeHanziCertos];

    if (elemento.textContent === proximoCaractere) {
      fraseTraduzidaFinal.push(elemento.textContent);
      document.querySelector(".frase-traduzida").textContent = fraseTraduzidaFinal.join("");
      quantidadeDeHanziCertos += 1;

      if (mandarim.length === quantidadeDeHanziCertos) {
        document.querySelector(".certo").style.opacity = "1";
      }
    }
  });
}

function criaHanzi() {
  const mandarim = frases[fraseInicial].mandarim.replace(/\s/g, "");
  const caracteresNecessarios = caracteresUnicos(mandarim);
  const totalCelulas = Math.min(32, Math.max(16, caracteresNecessarios.length + 4));
  const celulas = [...caracteresNecessarios];

  while (celulas.length < totalCelulas) {
    celulas.push(caractereDistrator(caracteresNecessarios));
  }

  mostraHanzi = embaralhar(celulas);
  containerHanzi.innerHTML = "";

  mostraHanzi.forEach((caractere) => {
    const celula = document.createElement("p");
    celula.className = "hanzi hanzi-frase";
    celula.textContent = caractere;
    configurarCliqueHanzi(celula);
    containerHanzi.appendChild(celula);
  });
}

menuSuspenso.addEventListener("click", (event) => {
  event.stopPropagation();
  if (menuPaginas) {
    menuPaginas.style.display = menuPaginas.style.display === "block" ? "none" : "block";
    menuPaginas.style.backgroundColor = "#61363A";
    menuPaginas.style.bottom = "100%";
  }
});

document.addEventListener("click", () => {
  if (menuPaginas) menuPaginas.style.display = "none";
});

botaoAleatorio.addEventListener("click", () => {
  viraFicha("frases", "perguntas");
  mostrarSecao("ficha");
  botaoSelecionado = "ale";
});

botaoFrases.addEventListener("click", () => {
  viraFicha("ficha", "perguntas");
  mostrarSecao("frases");
  novaFraseTraducao();
});

botaoPerguntas.addEventListener("click", () => {
  viraFicha("ficha", "frases");
  mostrarSecao("perguntas");
  novaPergunta();
});

botaoProximo.forEach((botao) => {
  botao.addEventListener("click", () => {
    const secaoPerguntas = document.querySelector(".flip-img-back.perguntas");
    if (secaoPerguntas && secaoPerguntas.style.display !== "none") {
      novaPergunta();
      return;
    }
    novaFraseTraducao();
  });
});

botaoInicio.forEach((botao) => {
  botao.addEventListener("click", () => location.reload());
});

botaoVoltar.addEventListener("click", () => location.reload());

botaoSom.addEventListener("click", () => {
  tocarSom(listaDePalavras[novoIndice]);
});

botaoFicha.addEventListener("click", () => {
  condicaoBotao();
  novaFicha(listaDePalavras, novoIndice);
});

document.querySelector(".flip-img-back.perguntas").addEventListener("click", (event) => {
  if (event.target.closest(".pergunta, .pergunta-pinyin, .pergunta-portugues")) {
    mostrarResposta();
  }
});

carregarDados().catch((erro) => {
  console.error("Erro ao carregar dados:", erro);
  document.querySelector(".intro-texto").textContent =
    "Não foi possível carregar os dados. Verifique se os arquivos em data/ estão disponíveis.";
});

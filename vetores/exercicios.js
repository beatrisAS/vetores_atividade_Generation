// Atividade – Vetores (Lógica de Programação)

// Lê o texto digitado e devolve um vetor com exatamente 10 inteiros (ou null se inválido)
function lerVetor(texto) {
  const partes = texto.trim().split(/[\s,;]+/).filter(p => p !== "");
  if (partes.length !== 10) return null;
  const vetor = [];
  for (let i = 0; i < partes.length; i++) {
    const n = Number(partes[i]);
    if (!Number.isInteger(n)) return null;
    vetor[i] = n;
  }
  return vetor;
}

// ---------- Exercício 1: ordenar em ordem decrescente (Bubble Sort) ----------
function ordenarDecrescente(vetor) {
  const v = vetor.slice(); // mantém o original intacto
  for (let i = 0; i < v.length - 1; i++) {
    for (let j = 0; j < v.length - 1 - i; j++) {
      if (v[j] < v[j + 1]) {
        const aux = v[j];
        v[j] = v[j + 1];
        v[j + 1] = aux;
      }
    }
  }
  return v;
}

// ---------- Exercício 2: índices ímpares, pares, soma e média ----------
function analisarVetor(vetor) {
  const indicesImpares = [];
  const pares = [];
  let soma = 0;

  for (let i = 0; i < vetor.length; i++) {
    if (i % 2 !== 0) indicesImpares.push(vetor[i]);
    if (vetor[i] % 2 === 0) pares.push(vetor[i]);
    soma += vetor[i];
  }

  const media = soma / vetor.length; // real (sem arredondar)
  return { indicesImpares, pares, soma, media };
}

// ---------- Ligação com a página ----------
function mostrarErro(idSaida) {
  document.getElementById(idSaida).innerHTML =
    '<p class="erro">Digite exatamente 10 números inteiros, separados por espaço ou vírgula.</p>';
}

function executarEx1() {
  const vetor = lerVetor(document.getElementById("entrada1").value);
  if (!vetor) return mostrarErro("saida1");
  const ordenado = ordenarDecrescente(vetor);
  document.getElementById("saida1").innerHTML =
    "<p><strong>Entrada:</strong> " + vetor.join(" | ") + "</p>" +
    "<p><strong>Saída:</strong> " + ordenado.join(" | ") + "</p>";
}

function executarEx2() {
  const vetor = lerVetor(document.getElementById("entrada2").value);
  if (!vetor) return mostrarErro("saida2");
  const r = analisarVetor(vetor);
  document.getElementById("saida2").innerHTML =
    "<p><strong>Elementos nos índices ímpares:</strong> " + r.indicesImpares.join(" ") + "</p>" +
    "<p><strong>Elementos pares:</strong> " + (r.pares.length ? r.pares.join(" ") : "nenhum") + "</p>" +
    "<p><strong>Soma:</strong> " + r.soma + "</p>" +
    "<p><strong>Média:</strong> " + r.media + "</p>";
}

document.getElementById("btn1").addEventListener("click", executarEx1);
document.getElementById("btn2").addEventListener("click", executarEx2);

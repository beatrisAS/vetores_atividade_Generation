programa {
  funcao inicio() {
    inteiro vetor[10]
    inteiro soma = 0
    real media

    para (inteiro i = 0; i < 10; i++) {
      escreva("Digite o número ", i + 1, ": ")
      leia(vetor[i])
      soma = soma + vetor[i]
    }

    escreva("\nElementos nos índices ímpares:\n")
    para (inteiro i = 0; i < 10; i++) {
      se (i % 2 != 0) {
        escreva(vetor[i], " ")
      }
    }

    escreva("\n\nElementos pares:\n")
    para (inteiro i = 0; i < 10; i++) {
      se (vetor[i] % 2 == 0) {
        escreva(vetor[i], " ")
      }
    }

    media = soma / 10.0

    escreva("\n\nSoma:\n", soma)
    escreva("\n\nMédia:\n", media, "\n")
  }
}

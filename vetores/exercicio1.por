programa {
  funcao inicio() {
    inteiro vetor[10] = {2, 5, 1, 3, 4, 9, 7, 8, 10, 6}
    inteiro aux

    escreva("Vetor original: ")
    para (inteiro i = 0; i < 10; i++) {
      escreva(vetor[i], " ")
    }

    para (inteiro i = 0; i < 9; i++) {
      para (inteiro j = 0; j < 9 - i; j++) {
        se (vetor[j] < vetor[j + 1]) {
          aux = vetor[j]
          vetor[j] = vetor[j + 1]
          vetor[j + 1] = aux
        }
      }
    }

    escreva("\nVetor em ordem decrescente: ")
    para (inteiro i = 0; i < 10; i++) {
      escreva(vetor[i], " ")
    }
    escreva("\n")
  }
}

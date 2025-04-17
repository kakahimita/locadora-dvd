export class RelatorioEmprestimos {
    constructor(registroEmprestimo) {
        this.registroEmprestimo = registroEmprestimo;
    }

    imprimeRelatorio() {
        const emprestimos = this.registroEmprestimo.getEmprestimos();

        if (emprestimos.length === 0) {
            console.log("Nenhum empréstimo registrado.");
            return;
        }

        console.log("Relatório de Empréstimos:");
        emprestimos.forEach((e, index) => {
            console.log(`${index + 1}. DVD: ${e.dvd.titulo} | Amigo: ${e.amigo.nome} | Emprestado em: ${e.dataEmprestimo.toLocaleDateString()} | Devolver até: ${e.dataDevolver.toLocaleDateString()}`);
        });
    }

    getEmprestimos() {
        return this.registroEmprestimo;
      }      
}

// RegistroEmprestimo.js
import { Emprestimo } from './Emprestimo.js';

export class RegistroEmprestimo {
    constructor() {
        this.emprestimos = [];
    }

    empresta(amigo, dvd, dataDevolucao) {
        if (this.estaEmprestado(dvd)) {
            console.log("Este DVD já está emprestado.");
            return;
        }

        if (this.faixaEtariaAbaixo(amigo, dvd)) {
            console.log("Amigo não tem idade suficiente para este DVD.");
            return;
        }

        this.emprestimos.push(new Emprestimo(amigo, dvd, new Date(), dataDevolver));

        console.log(`DVD ${dvd.titulo} emprestado para ${amigo.nome}.`);
    }

    devolve(dvd) {
        const index = this.emprestimos.findIndex(emp => emp.dvd === dvd);
        if (index !== -1) {
            this.emprestimos.splice(index, 1);
            console.log(`DVD ${dvd.titulo} foi devolvido.`);
        } else {
            console.log(`Este DVD não está emprestado`);
        }
    }

    estaEmprestado(dvd) {
        return this.emprestimos.some(emp => emp.dvd === dvd);
    }

    faixaEtariaAbaixo(amigo, dvd) {
        return dvd.faixaEtaria.menorQue(amigo.faixaEtaria);
    }

    getEmprestimos() {
        return this.emprestimos;
    }
}
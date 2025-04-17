import { CadastroAmigo } from './services/CadastroAmigo.js';
import { CadastroDVD } from './services/CadastroDVD.js';
import { RegistroEmprestimo } from './models/RegistroEmprestimo.js';
import { Interface } from './ui/Interface.js';

export class Main {
    constructor() {
        this.interface = new Interface();
        this.cadastroAmigo = new CadastroAmigo();
        this.cadastroDVD = new CadastroDVD();
        this.registroEmprestimo = new RegistroEmprestimo();
    }

    cadastraAmigos() {
        const amigo = this.interface.leAmigo();
        this.cadastroAmigo.inclui(amigo);
    }

    cadastraDVDs() {
        const dvd = this.interface.leDVD();
        this.cadastroDVD.inclui(dvd);
    }

    registraEmprestimos() {
        const emprestimo = this.interface.leEmprestimo();
        this.registroEmprestimo.empresta(emprestimo.amigo, emprestimo.dvd);
    }
}

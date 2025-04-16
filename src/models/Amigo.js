import { Pessoa } from "./Pessoa.js";
export class Amigo extends Pessoa {
    constructor(nome, numTelefone, email, endereco, faixaEtaria) {
        super(nome);
        this.numTelefone = numTelefone;
        this.email = email;
        this.endereco = endereco;
        this.faixaEtaria = faixaEtaria;
    }
}
import { Pessoa } from "./Pessoa.js";
export class Amigo extends Pessoa {
    constructor(nome, numTelefone, email, endereco) {
        super(nome);
        this.numTelefone = numTelefone;
        this.email = email;
        this.endereco = endereco;
    }
}
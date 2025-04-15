export class CadastroAmigo {
    constructor() {
        this.amigos = [];
    }

    inclui(amigo) {
        this.amigos.push(amigo);
    }

    altera(index, novoAmigo) {
        if (this.amigos[index]) {
            this.amigos[index] = novoAmigo;
        }
    }

    exclui(index) {
        if (this.amigos[index]) {
            this.amigos.splice(index, 1);
        }
    }

    listar() {
        return this.amigos;
    }

    getAmigo(index) {
        return this.amigos[index];
    }
}
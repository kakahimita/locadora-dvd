export class CadastroDVD {
    constructor() {
        this.dvds = [];
    }

    inclui(dvd) {
        this.dvds.push(dvd);
    }

    altera(index, novoDvd) {
        if (this.dvds[index]) {
            this.dvds[index] = novoDvd;
        }
    }

    exclui(index) {
        if (this.dvds[index]) {
            this.dvds.splice(index, 1);
        }
    }

    listar() {
        return this.dvds;
    }

    getDVD(index) {
        return this.dvds[index];
    }
}
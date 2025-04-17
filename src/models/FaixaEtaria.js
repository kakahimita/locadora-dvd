export class FaixaEtaria {
    constructor(de, ate) {
        this.de = de;
        this.ate = ate;
    }

    ehAbaixo(outraFaixa) {
        return outraFaixa.ate < this.de;
    }
}
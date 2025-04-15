export class FaixaEtaria {
    constructor(de, ate) {
        this.de = de;
        this.ate = ate;
    }

    ehAbaixo(outraFaixa) {
        return this.ate < outraFaixa.de;
    }
}
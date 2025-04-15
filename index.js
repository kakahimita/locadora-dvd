import { FaixaEtaria } from "./src/models/FaixaEtaria.js";

const faixaAmigo = new FaixaEtaria(8, 15);
const faixaDVD = new FaixaEtaria(18, 99)

console.log(faixaAmigo.ehAbaixo(faixaDVD));

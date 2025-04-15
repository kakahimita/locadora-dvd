import { FaixaEtaria } from "./src/models/FaixaEtaria.js";
import { Genero } from "./src/models/Genero.js";
import { Pessoa } from "./src/models/Pessoa.js";
import { DVD } from "./src/models/DVD.js";
import { Amigo } from "./src/models/Amigo.js";

// Import readline-sync
import readlineSync from 'readline-sync';

// --- Inicializar o sistema ---
const amigos = [];
const dvds = [];

// --- Loop Principal (Menu Interativo) ---
let rodando = true;

while (rodando) {
    console.log("\n--- Menu Principal ---");
    console.log("1. Cadastrar Amigo");
    console.log("2. Cadastrar DVD");
    console.log("0. Sair");

    const opcao = readlineSync.question('Escolha uma opcao: ');

    switch (opcao) {
        case '1':
            // Cadastrar Amigo
            console.log("\n--- Cadastrar Novo Amigo ---");
            const nomeAmigo = readlineSync.question('Nome do amigo: ');
            const numTelefone = readlineSync.question('Telefone: ');
            const email = readlineSync.question('E-mail: ');
            const endereco = readlineSync.question('Endereco: ');

            const novoAmigo = new Amigo(nomeAmigo, numTelefone, email, endereco);

            amigos.push(novoAmigo);

            console.log("cadastrado com sucesso!")
            console.log(novoAmigo);
            break;
    }
}
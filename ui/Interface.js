// Interface.js
import readline from 'readline-sync';

export class Interface {
    imprime(texto) {
        console.log(texto);
    }

    imprimeMenu() {
        console.log("\n===== MENU PRINCIPAL =====");
        console.log("1 - Cadastrar Amigo");
        console.log("2 - Cadastrar DVD");
        console.log("3 - Registrar Empréstimo");
        console.log("4 - Devolver DVD");
        console.log("5 - Listar DVDs");
        console.log("6 - Sair");
        const opcao = readline.question("Escolha uma opção: ");
        return opcao;
    }

    leAmigo() {
        const nome = readline.question("Nome do amigo: ");
        const telefone = readline.question("Telefone: ");
        const email = readline.question("Email: ");
        const endereco = readline.question("Endereço: ");
        return { nome, telefone, email, endereco };
    }

    leDVD() {
        const titulo = readline.question("Título do DVD: ");
        const sinopse = readline.question("Sinopse: ");
        const diretor = readline.question("Nome do Diretor: ");
        const artista = readline.question("Nome do Artista Principal: ");
        const genero = readline.question("Gênero: ");

        return {
            titulo,
            sinopse,
            diretor,
            artista,
            genero,
        };
    }

    leFaixaEtaria() {
        const faixaDe = parseInt(readline.question("Faixa Etária - de: "));
        const faixaAte = parseInt(readline.question("Faixa Etária - até: "));

        return {
            de: faixaDe,
            ate: faixaAte
        };
    }

    leData(mensagem) {
        const dataString = readline.question(mensagem);
        return new Date(dataString);
    }

    leOpcao(mensagem) {
        return readline.question(mensagem);
    }

    alertaFaixaEtaria(amigo, dvd) {
        console.log(`⚠️  O amigo ${amigo.nome} não está na faixa etária permitida para o DVD "${dvd.titulo}".`);
    }
}
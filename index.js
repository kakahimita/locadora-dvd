import { Interface } from "./ui/Interface.js";
import { CadastroAmigo, CadastroDVD, RegistroEmprestimo, RelatorioEmprestimos } from "./models.js";
import { Amigo, DVD, Pessoa, Genero, FaixaEtaria } from "./models.js";

// Instâncias principais
const ui = new Interface();
const cadastroAmigo = new CadastroAmigo();
const cadastroDVD = new CadastroDVD();
const registro = new RegistroEmprestimo();
const relatorio = new RelatorioEmprestimos(registro);

// Loop principal
let sair = false;

while (!sair) {
  const opcao = ui.imprimeMenu();

  switch (opcao) {
    case "1":
      const dadosAmigo = ui.leAmigo();
      const faixaEtariaAmigo = new FaixaEtaria(0, 99); // ou pedir do usuário depois se quiser refinar
      const novoAmigo = new Amigo(
        dadosAmigo.nome,
        dadosAmigo.telefone,
        dadosAmigo.email,
        dadosAmigo.endereco,
        faixaEtariaAmigo
      );
      cadastroAmigo.inclui(novoAmigo);
      ui.imprime("✅ Amigo cadastrado com sucesso!");
      break;

    case "2":
      const dadosDVD = ui.leDVD();
      const diretor = new Pessoa(dadosDVD.diretor);
      const artista = new Pessoa(dadosDVD.artista);
      const genero = new Genero(dadosDVD.genero);
      const faixaEtaria = new FaixaEtaria(dadosDVD.faixaEtaria.de, dadosDVD.faixaEtaria.ate);

      const novoDVD = new DVD(
        dadosDVD.titulo,
        dadosDVD.sinopse,
        diretor,
        artista,
        genero,
        faixaEtaria
      );
      cadastroDVD.inclui(novoDVD);
      ui.imprime("🎬 DVD cadastrado com sucesso!");
      break;

    case "3":
      const amigos = cadastroAmigo.listar();
      const dvds = cadastroDVD.listar();

      if (amigos.length === 0 || dvds.length === 0) {
        ui.imprime("⚠️ Não há amigos ou DVDs suficientes para fazer empréstimo.");
        break;
      }

      console.log("\nLista de Amigos:");
      amigos.forEach((a, i) => console.log(`${i} - ${a.nome}`));
      const indexAmigo = parseInt(prompt("Escolha o índice do amigo: "));

      console.log("\nLista de DVDs:");
      dvds.forEach((d, i) => console.log(`${i} - ${d.titulo}`));
      const indexDVD = parseInt(prompt("Escolha o índice do DVD: "));

      const amigo = cadastroAmigo.getAmigo(indexAmigo);
      const dvd = cadastroDVD.getDVD(indexDVD);

      registro.empresta(amigo, dvd);
      break;

    case "4":
      const listaEmprestimos = registro.getEmprestimos();
      if (listaEmprestimos.length === 0) {
        ui.imprime("Nenhum DVD está emprestado.");
        break;
      }

      console.log("\nDVDs emprestados:");
      listaEmprestimos.forEach((e, i) => {
        console.log(`${i} - ${e.dvd.titulo} (para ${e.amigo.nome})`);
      });

      const indiceDevolucao = parseInt(prompt("Escolha o índice do DVD para devolver: "));
      const dvdDevolver = listaEmprestimos[indiceDevolucao]?.dvd;
      if (dvdDevolver) {
        registro.devolve(dvdDevolver);
      } else {
        console.log("Índice inválido.");
      }
      break;

    case "5":
      const todosDVDs = cadastroDVD.listar();
      console.log("\n=== Lista de DVDs Cadastrados ===");
      todosDVDs.forEach((dvd, i) => {
        console.log(`${i + 1}. ${dvd.titulo} - ${dvd.genero.descricao}`);
      });
      break;

    case "6":
      sair = true;
      ui.imprime("👋 Saindo do sistema. Até mais!");
      break;

    default:
      ui.imprime("❌ Opção inválida.");
  }
}

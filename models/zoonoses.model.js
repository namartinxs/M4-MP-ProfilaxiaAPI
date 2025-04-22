import zoonoses from "./zoonoses/zoonoses.js";

class zoonose {
  constructor(nome) {
    this.nome = nome;
  }

  listarPelaBusca(nome) {
    const pesquisa = zoonoses.find(
      (d) => d.nome.toLowerCase() === nome.toLowerCase()
    );

    if (!pesquisa) {
      return null;
    }

    return {
      nome: pesquisa.nome,
      sintomas: pesquisa.sintomas,
      transmissor: pesquisa.transmissor,
      periodo_de_incubacao: pesquisa.periodo_de_incubacao,
    };
  }
}

export default zoonose;

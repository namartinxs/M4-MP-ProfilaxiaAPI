import tipoAnimal from "./utils/enumsRaiva/tipoAnimal.js";
import tipoExposição from "./utils/enumsRaiva/tipoExposicao.js";
import condutas from "./utils/enumsRaiva/condutas.js";
import observacao from "./utils/enumsRaiva/observacao.js";
import recomendacao from "./utils/recomendacao.js"
class ProfilaxiaRaiva {
  constructor({ animal, tipo_exposicao, observacao }) {
    this.tipo_exposicao = tipo_exposicao;
    this.animal = animal;
    this.observacao = observacao;
  }

  definirConduta() {
    if (this.animal === tipoAnimal.cao_gato && !this.observacao) {
      return {
        erro: "O campo observação é obrigatório quando o animal é um cão ou gato."
      };
    }

    if (this.tipo_exposicao === tipoExposição.indireto) {
      if (this.animal == tipoAnimal.morcego) {
        return {
          aviso: recomendacao.aviso,
          conduta: condutas.soro_e_vacina
        };
      }
      return {
        aviso: recomendacao.aviso,
        conduta: condutas.indireto
      };
    }

    if (this.animal === tipoAnimal.silvestre) {
      return {
        conduta: condutas.soro_e_vacina
      };
    }

    if (this.animal === tipoAnimal.domestico_de_interesse_economico) {
      return {
        aviso: recomendacao.aviso,
        conduta: condutas.avaliar_acidente
      };
    }

    if (this.animal === tipoAnimal.cao_gato) {
      if (this.observacao === observacao.passivel_de_observacao) {
        return {
          aviso: recomendacao.aviso,
          conduta: `${condutas.profilaxia_e_observacao} ${condutas.avaliar_acidente}`
        };
      }

      if (
        this.observacao === observacao.com_sinais_de_raiva ||
        this.observacao === observacao.nao_passivel_de_observacao
      ) {
        return {
          aviso: recomendacao.aviso,
          conduta: condutas.avaliar_acidente
        };
      }
    }

    throw new Error(
      "Não foi possível determinar a conduta. Verifique os dados enviados."
    );
  }
}

export default ProfilaxiaRaiva;

import tipoAnimal from "./enumsRaiva/tipoAnimal.js";
import tipoExposição from "./enumsRaiva/tipoExposicao.js";
import condutas from "./enumsRaiva/condutas.js";
import observacao from "./enumsRaiva/observacao.js";

class ProfilaxiaRaiva {
  constructor({ animal, tipo_exposicao, observacao }) {
    this.tipo_exposição = tipo_exposicao;
    this.animal = animal;
    this.observacao = observacao;
  }

  definirConduta() {
    if (this.animal === tipoAnimal.cao_gato && !this.observacao) {
        return {
            erro: "O campo observação é obrigatório quando o animal é um cão ou gato."
        };
    }

    if (this.tipo_exposição === tipoExposição.indireto) {
      if (this.animal == tipoAnimal.morcego) {
        return {
          conduta: condutas.soro_e_vacina,
        };
      }
      return {
        conduta: condutas.indireto,
      };
    }

    if (this.animal === tipoAnimal.silvestre) {
      return {
        conduta: condutas.soro_e_vacina,
      };
    }

    if (this.animal === tipoAnimal.domestico_de_interesse_economico) {
      return {
        conduta: condutas.avaliar_acidente,
      };
    }

    if (this.animal === tipoAnimal.cao_gato) {
      if (this.observacao === observacao.passivel_de_observacao) {
        return {
          conduta: `${condutas.profilaxia_e_observacao} ${condutas.avaliar_acidente}`,
        };
      }

      if (
        this.observacao === observacao.com_sinais_de_raiva ||
        this.observacao === observacao.nao_passivel_de_observacao
      ) {
        return {
          conduta: condutas.avaliar_acidente,
        };
      }
    }

    return {
      erro: "Não foi possível determinar a conduta. Verifique os dados enviados.",
    };
  }
}

export default ProfilaxiaRaiva;

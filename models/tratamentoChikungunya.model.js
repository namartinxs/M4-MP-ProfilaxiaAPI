import tratamento from "./utils/tratamentoChikungunya/tratamento.js";
import recomendacao from "./utils/recomendacao.js";
class TratamentoChikungunya {
  listarTratamento() {
    if (!tratamento) {
      throw new Error("Dados de tratamento indisponíveis.");
    }
    return {
      aviso: recomendacao.aviso,
      tratamento_Chikungunya: tratamento,
    };
  }
}

export default TratamentoChikungunya;

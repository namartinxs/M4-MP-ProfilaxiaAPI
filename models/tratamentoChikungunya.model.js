import tratamento from "./tratamentoChikungunya/tratamento.js";

class TratamentoChikungunya {
  listarTratamento() {
    if (!tratamento) {
      throw new Error("Dados de tratamento indisponíveis.");
    }
    return {
      tratamento_Chikungunya: tratamento,
    };
  }
}

export default TratamentoChikungunya;

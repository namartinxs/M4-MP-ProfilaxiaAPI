import tratamento from "./tratamentoChikungunya/tratamento.js";

class TratamentoChikungunya {
  listarTratamento() {
    return {
      tratamento_Chikungunya: tratamento,
    };
  }
}

export default TratamentoChikungunya;

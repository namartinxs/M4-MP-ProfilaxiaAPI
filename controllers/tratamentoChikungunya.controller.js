import TratamentoChikungunya from "../models/tratamentoChikungunya.model.js";
const listarTratamento = (req, res) => {
  const chamada = new TratamentoChikungunya();
  const tratamento = chamada.listarTratamento();
  res.json(tratamento);
};

export default listarTratamento;

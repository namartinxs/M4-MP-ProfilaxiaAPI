import TratamentoChikungunya from "../models/tratamentoChikungunya.model.js";
const listarTratamento = (req, res) => {
  try{
    const chamada = new TratamentoChikungunya();
    const tratamento = chamada.listarTratamento();
    res.json(tratamento);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
  
};

export default listarTratamento;

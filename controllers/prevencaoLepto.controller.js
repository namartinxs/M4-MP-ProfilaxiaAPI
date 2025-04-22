import PrevencaoLepto from "../models/prevencaoLepto.model.js";

const listaPrevencoes = (req, res) => {
  try{
  const chamada = new PrevencaoLepto();
  const preventivos = chamada.listaPrevencoes();
  res.json(preventivos);
} catch (error) {
  res.status(400).json({ erro: error.message });
}
};

export default listaPrevencoes;

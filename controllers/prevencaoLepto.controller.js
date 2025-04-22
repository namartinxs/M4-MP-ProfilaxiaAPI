import PrevencaoLepto from "../models/prevencaoLepto.model.js";

const listaPrevencoes = (req, res) => {
  const chamada = new PrevencaoLepto();
  const preventivos = chamada.listaPrevencoes();
  res.json(preventivos);
};

export default listaPrevencoes;

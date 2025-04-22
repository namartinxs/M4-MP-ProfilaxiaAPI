import ProfilaxiaModel from "../models/profilaxiaRaiva.Model.js";

const avaliarAcidenteRaiva = (req, res) => {
  const profilaxia = new ProfilaxiaModel(req.query);
  const result = profilaxia.definirConduta();
  res.json(result);
};

export default {
  avaliarAcidenteRaiva,
};

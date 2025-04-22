import ProfilaxiaModel from "../models/profilaxiaRaiva.model.js";

const avaliarAcidenteRaiva = (req, res) => {
  try {
    const profilaxia = new ProfilaxiaModel(req.query);
    const result = profilaxia.definirConduta();
    res.json(result);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

export default {
  avaliarAcidenteRaiva
};

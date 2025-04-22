import zoonosesModel from "../models/zoonoses.model.js";

const listarZoonoses = (req, res) => {
  try {
    const { nome } = req.params;
    const chamada = new zoonosesModel();
    const zoonose = chamada.listarPelaBusca(nome);
    res.json(zoonose);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

export default listarZoonoses;

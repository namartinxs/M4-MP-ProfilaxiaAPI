import zoonosesModel from "../models/zoonoses.model.js";

const listarZoonoses = (req, res) => {
  const { nome } = req.params;
  const chamada = new zoonosesModel();
  const zoonose = chamada.listarPelaBusca(nome);

  if (!zoonose) {
    return res.status(404).json({ message: "Zoonose não presente na lista" });
  }

  res.json(zoonose);
};

export default listarZoonoses;

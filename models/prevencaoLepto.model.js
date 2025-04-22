import medidas from "./medidasLeptospirose/medidas.js";

class PrevencaoLepto {
  listaPrevencoes() {
    return {
      MEDIDAS_DE_PREVENÇÃO_AMBIENTAS: medidas.medidas_ambientais,
      MEDIDAS_DE_PREVENÇÃO_PESSOAIS: medidas.medidas_pessoais,
    };
  }
}

export default PrevencaoLepto;

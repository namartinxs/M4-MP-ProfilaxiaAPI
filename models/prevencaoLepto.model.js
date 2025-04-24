import medidas from "./utils/medidasLeptospirose/medidas.js";
import recomendacao from "./utils/recomendacao.js";
class PrevencaoLepto {
  listaPrevencoes() {
    if (!medidas || !medidas.medidas_ambientais || !medidas.medidas_pessoais) {
      throw new Error("Dados de prevenção indisponíveis.");
    }
    return {
      aviso: recomendacao.aviso,
      MEDIDAS_DE_PREVENÇÃO_AMBIENTAS: medidas.medidas_ambientais,
      MEDIDAS_DE_PREVENÇÃO_PESSOAIS: medidas.medidas_pessoais
    };
  }
}

export default PrevencaoLepto;

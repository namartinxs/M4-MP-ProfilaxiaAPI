import express from "express";

//IMPORTA AS ROTAS
import profilaxiaRaivaRoute from "./routes/profilaxiaRaiva.routes.js";
import zoonosesRoute from "./routes/zoonoses.routes.js";
import prevencaoLeptoRoute from "./routes/prevencaoLepto.routes.js";
import tratamentoChikungunyaRoute from "./routes/tratamentoChikungunya.routes.js";


const app = express();
//MIDDLEWARES
app.use(express.json()); //PERMITE LER JSON NO CORPO DA REQ

//ROTAS
app.use("/profilaxiaraiva", profilaxiaRaivaRoute);
app.use("/zoonoses", zoonosesRoute);
app.use("/prevencaoLeptospirose", prevencaoLeptoRoute);
app.use("/tratamentoChikungunya", tratamentoChikungunyaRoute);


//INICIAR O SERVIDOR
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API RODANDO NA PORTA: ${PORT}`);
});

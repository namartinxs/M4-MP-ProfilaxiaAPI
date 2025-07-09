import express from "express";

import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import cors from 'cors';


//IMPORTA AS ROTAS
import profilaxiaRaivaRoute from "./routes/profilaxiaRaiva.routes.js";
import zoonosesRoute from "./routes/zoonoses.Routes.js";
import prevencaoLeptoRoute from "./routes/prevencaoLepto.routes.js";
import tratamentoChikungunyaRoute from "./routes/tratamentoChikungunya.routes.js";

const swaggerDocument = YAML.load('./swagger.yaml');


const app = express();

//MIDDLEWARES
app.use(express.json()); //PERMITE LER JSON NO CORPO DA REQ
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//ROTAS
app.use(cors());
app.use("/profilaxiaraiva", profilaxiaRaivaRoute);
app.use("/zoonoses", zoonosesRoute);
app.use("/prevencaoLeptospirose", prevencaoLeptoRoute);
app.use("/tratamentoChikungunya", tratamentoChikungunyaRoute);


//INICIAR O SERVIDOR
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API RODANDO NA PORTA: ${PORT}`);
});

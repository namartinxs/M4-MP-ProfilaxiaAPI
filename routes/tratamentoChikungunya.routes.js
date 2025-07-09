import express from "express"
import tratamento from "../controllers/tratamentoChikungunya.controller.js"
import cors from "cors";

const router = express.Router()
router.use(cors()); 
router.get("/tratamento", tratamento);

export default router
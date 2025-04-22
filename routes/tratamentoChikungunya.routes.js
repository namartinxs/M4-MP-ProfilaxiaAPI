import express from "express"
import tratamento from "../controllers/tratamentoChikungunya.controller.js"

const router = express.Router()
router.get("/tratamento", tratamento);

export default router
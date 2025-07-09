import express from "express";
import cors from "cors";
import listagemPrevLepto from "../controllers/prevencaoLepto.controller.js";
const router = express.Router();
router.use(cors()); 
router.get("/medidasPrevencaoLeptospirose", listagemPrevLepto);

export default router;

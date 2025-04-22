import express from "express";
import listagemPrevLepto from "../controllers/prevencaoLepto.controller.js";
const router = express.Router();

router.get("/medidasPrevencaoLeptospirose", listagemPrevLepto);

export default router;

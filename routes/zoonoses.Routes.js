import express from "express";
import listaZoonose from "../controllers/zoonoses.controller.js";

const router = express.Router();

router.get("/listagemZoonose/:nome", listaZoonose);

export default router;

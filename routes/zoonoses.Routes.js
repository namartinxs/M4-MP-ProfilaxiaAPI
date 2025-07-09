import express from "express";
import listaZoonose from "../controllers/zoonoses.controller.js";
import cors from "cors";

const router = express.Router();
router.use(cors()); 
router.get("/listagemZoonose/:nome", listaZoonose);

export default router;

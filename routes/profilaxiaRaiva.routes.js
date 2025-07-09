import express from "express";
import cors from "cors";
import ProfilaxiaRaivaController from "../controllers/profilaxiaRaiva.controller.js";
const router = express.Router();
router.use(cors()); 
router.get(
  "/avaliarAcidenteRaiva",
  ProfilaxiaRaivaController.avaliarAcidenteRaiva
);

export default router;

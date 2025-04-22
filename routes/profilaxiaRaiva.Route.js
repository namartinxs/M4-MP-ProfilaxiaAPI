import express from "express";
import ProfilaxiaRaivaController from "../controllers/profilaxiaRaiva.controller.js";
const router = express.Router();
router.get(
  "/avaliarAcidenteRaiva",
  ProfilaxiaRaivaController.avaliarAcidenteRaiva
);

export default router;

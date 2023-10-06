import { Router } from "express";
import { updateUserRole } from '../controllers/usersControllers.js';

const router = Router();

// Ruta para cambiar el rol de un usuario (de user a premium y viceversa)
router.put('/premium/:uid', updateUserRole);

export default router;
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const allRouter = require('./all.js');
const activitiesRouter = require('./activities.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', allRouter);
router.use('/tourism', activitiesRouter )





module.exports = router;

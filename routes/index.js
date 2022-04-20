import express from "express";
const router = express.Router();

//Redirección de url
router.get('/', (req, res)=>{ // req es la peticion que estamos realizando, y res es la respuesta que vamos a obtener
    res.render('inicio');
})

router.get('/contacto', (req, res)=>{ // req es la peticion que estamos realizando, y res es la respuesta que vamos a obtener
    res.send('Contacto');
})

router.get('/nosotros', (req, res)=>{ // req es la peticion que estamos realizando, y res es la respuesta que vamos a obtener
    const viajes = 'Te cambio el texto';
    
    res.render('nosotros', {
        viajes
    });
})

export default router;
// Importamos el módulo Express
import express from 'express';
import usersRouter from './users.js'; // Enrutador para las rutas de usuarios
import productsRouter from './products.js';

// Creamos un nuevo objeto router
const router = express.Router();

router.use('/users', usersRouter); // Usar el enrutador para rutas de usuarios
router.use('/products', productsRouter)
// Exportamos el objeto router
export default router;

/* 
    línea 1: Importamos el módulo Express. Este módulo proporciona las funciones y clases necesarias para crear aplicaciones web con Node.js.
    línea 4: Creamos un nuevo objeto router. Un router es una estructura de datos que se utiliza para organizar las rutas de una aplicación web.
    línea 7: Definimos una ruta GET para la raíz del sitio web. Una ruta GET es una solicitud HTTP que se utiliza para recuperar datos de un servidor.
    línea 8: La función de la ruta es una función anónima que se ejecuta cuando se recibe una solicitud a la ruta. En este caso, la función de la ruta simplemente envía una respuesta con el texto "Welcome gente".
    línea 11: Exportamos el objeto router. Esto permite que otros módulos o archivos de código hagan referencia al router.
    
 */
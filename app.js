import 'dotenv/config.js'
import createError from 'http-errors'; // Módulo para crear errores HTTP
import express from 'express'; // Marco de trabajo para crear aplicaciones web
import cookieParser from 'cookie-parser'; // Módulo para analizar cookies de las solicitudes
import logger from 'morgan'; // Módulo para el registro (logging) de solicitudes y respuestas
import path from 'path'; // Módulo para trabajar con rutas de archivos y directorios
import indexRouter from './routes/index.js'; // Enrutador para la página principal
import usersRouter from './routes/users.js'; // Enrutador para las rutas de usuarios
import productsRouter from './routes/products.js'; 
import { __dirname } from './utils/util.js';
// Crear una instancia de la aplicación Express
const app = express();
// Configuración del motor de vistas (Pug) y middleware
app.set('views', path.join(__dirname, 'views')); // Ruta a la carpeta de vistas
app.set('view engine', 'pug'); // Motor de vistas a utilizar: Pug

app.use(logger('dev')); // Configurar el registro de solicitudes en modo "dev"
app.use(express.json()); // Analizar solicitudes JSON
app.use(express.urlencoded({ extended: false })); // Analizar solicitudes de formularios
app.use(cookieParser()); // Analizar cookies en las solicitudes
app.use(express.static(path.join(__dirname, 'public'))); // Servir archivos estáticos desde la carpeta "public"

// Configurar enrutadores para rutas específicas
app.use('/', indexRouter); // Usar el enrutador para la página principal
app.use('/users', usersRouter); // Usar el enrutador para rutas de usuarios
app.use('/products', productsRouter)
// Capturar solicitudes no manejadas y generar un error 404
app.use((req, res, next) => {
  next(createError(404));
});

// Manejo de errores generales
app.use((err, req, res, next) => {
  // Configurar información del error para mostrar en el entorno de desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderizar la página de error con la información correspondiente
  res.status(err.status || 500);
  res.render('error');
});

export default app; // Exportar la instancia de la aplicación Express

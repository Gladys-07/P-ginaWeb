const express = require('express');
const app = express();
const port = 4000;

// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Inicia el servidor en todas las interfaces de red
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

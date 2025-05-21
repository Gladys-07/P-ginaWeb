const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname)));

// Ruta para index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Otras rutas (login, crear cuenta, etc.)
app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/create-account.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'create-account.html'));
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

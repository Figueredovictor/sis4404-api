const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// ── Rutas de la API ──────────────────────────────────────────

// GET /  → estado del servidor
app.get('/', (req, res) => {
  res.json({
    mensaje: 'API actualizada automaticamente con CI/CD',
    version: '1.0.0',
    fecha: new Date().toISOString()
  });
});

// GET /saludo/:nombre  → saludo personalizado
app.get('/saludo/:nombre', (req, res) => {
  const { nombre } = req.params;
  res.json({
    mensaje: `Hola, ${nombre}! Bienvenido al proyecto SIS4404.`
  });
});

// GET /productos  → lista de productos de ejemplo
app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Laptop', precio: 15000 },
    { id: 2, nombre: 'Mouse', precio: 350 },
    { id: 3, nombre: 'Teclado', precio: 750 }
  ];
  res.json({ total: productos.length, productos });
});

// POST /productos  → agregar un producto
app.post('/productos', (req, res) => {
  const { nombre, precio } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ error: 'Se requiere nombre y precio' });
  }
  res.status(201).json({
    mensaje: 'Producto creado exitosamente',
    producto: { id: Date.now(), nombre, precio }
  });
});

// ── Iniciar servidor ─────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

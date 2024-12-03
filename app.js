const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo prueba Eber usando Node.js 18!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`);
});

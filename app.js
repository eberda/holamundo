const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo desde Azure App Services!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App corriendo en el puerto ${port}`);
});

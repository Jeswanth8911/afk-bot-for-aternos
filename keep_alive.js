const express = require('express');
const app = express();
const port = 1145;
app.get('/', (req, res) => res.send('Afk bot!'));

app.listen(port, () => console.log(`Afk bot is listening to http://localhost:${port}`));

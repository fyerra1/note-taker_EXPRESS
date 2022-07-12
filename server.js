const express = require('express');
const html = require('./routes/htmlRoutes');
const api = require('./routes/apiRoutes');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/', html);
app.use('/notes', api)

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}/`);
})


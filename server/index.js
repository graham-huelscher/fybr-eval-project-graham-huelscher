require('dotenv').load();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
const ENV = process.env.NODE_ENV || 'development';

const db = require('./db'); 

['projects', 'sites', 'trees'].forEach(router => {
  app.use(`/api/${router}`, require(`./routes/${router}`)(db));
});

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}, in ${ENV} mode.`));

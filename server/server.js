const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000;
const db = require('./config/connection');
const { auth_routes, api_routes } = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/auth', auth_routes);
app.use('/api', api_routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`SERVER SERVING AT PORT ${PORT}`))
  })
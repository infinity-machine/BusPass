const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(PORT, () => console.log(`SERVER SERVING AT PORT ${PORT}`))

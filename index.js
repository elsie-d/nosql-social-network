const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// cwd() returns the directory name of the directory containing the source code file
const cwd = process.cwd()

const PORT = process.env.PORT || 3001;
const app = express();

const activity = cwd.included('Social Network App')
? cwd.split('Social Network App')[1]
: cwd;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
    console.log(`API server for ${activity} running on port ${PORT}`);
});
});
const express = require('express');
const dotenv = require("dotenv");

const route = require('./router/commonrouter.js'); // ✅ Fixed import
const { connect_db } = require('./DB/ConnectDB.js');

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connect_db();
    console.log(`Server running at http://localhost:${PORT}`);
});

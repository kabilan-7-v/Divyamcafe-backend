const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');

const route = require('./router/commonrouter.js'); // ✅ Fixed import
const { connect_db } = require('./DB/ConnectDB.js');

dotenv.config();
const app = express();
app.use(cors());

// ✅ Move these above the routes
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use("/api", route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connect_db();
    console.log(`Server running at http://localhost:${PORT}`);
});

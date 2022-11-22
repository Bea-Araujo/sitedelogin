const express = require('express')
const cors = require('cors')
const app = express()

const sequelize = require("./connection");
const Routes = require("./routes")

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => console.log("database connect Successfully!!!"));

app.use(cors())
app.use(express.json())
app.use("/", Routes),

    app.listen(PORT, () => {
        console.log(`Server rodando na porta: ${PORT}`);
    })
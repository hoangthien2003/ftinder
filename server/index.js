import "dotenv/config"
import express from 'express'
import routerHome from "./routers/routerHome.js";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", routerHome)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})
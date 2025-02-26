import express, {Express} from "express";
import env from "dotenv";
import * as database from "./config/database";

env.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

//Body-parse
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

database.connect();

// RestAPI
app.get("/articles", (req, res) => {
    res.json({
        articles: []
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
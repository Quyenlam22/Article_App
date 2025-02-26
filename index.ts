import express, {Express} from "express";
import env from "dotenv";
import * as database from "./config/database";
import Article from "./models/article.model";

env.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

//Body-parse
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

database.connect();

// RestAPI
app.get("/articles", async (req, res) => {
    const articles = await Article.find({
        deleted: false
    });

    res.json({
        articles: articles
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
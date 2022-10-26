import compression from 'compression';
import express from 'express';
import path from 'path';

const app = express();

app.use(compression());
app.use(express.static(path.resolve("./static")));

app.get("/", (req, res) => res.redirect("/en"));

app.get("/ru", (req, res) => res.sendFile(path.resolve("./static/index-ru.html")));

app.get("/en", (req, res) => res.sendFile(path.resolve("./static/index-en.html")));

app.get("/ar", (req, res) => res.sendFile(path.resolve("./static/index-ar.html")));

app.listen(3000, "0.0.0.0", () => console.log("Successfully started on 0.0.0.0:3000"));

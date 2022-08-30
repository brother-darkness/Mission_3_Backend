import express, { Express, Request, Response } from 'express';
import filterpunctuation from './utils/filterpunctuation';

const bodyParser = require("body-parser");
const app: Express = express();
app.use(bodyParser.json({ extended: true }));
app.post('/api/insurance', (req: Request, res: Response) => {
    const nopunctuation: String = filterpunctuation(req.body.searchterm)
    console.log("Got body:", req.body);
    console.log('Removed any punctuation:',nopunctuation)
    res.send(nopunctuation);
})

app.listen(4321, () => {
    console.log('running on 4321')
});
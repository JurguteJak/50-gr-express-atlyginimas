import express from 'express';
import { routerMain } from './router/routerMain.js';

const app = express();
const port = 5036;

app.use(express.json({
    type: 'application/json',
}));
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// app.use((req, res, next) => {
//     console.log('>>>, req.url');
//     next();
// }, (req, res, next) => {
//     console.log(Date.now());
//     next();
// });

app.use('/', routerMain);

app.use((req, res, next) => {
    return res.status(404).send("Sorry can't find that!")
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    return res.status(500).send('Something broke!')
});

app.listen(port, () => {
    console.log(`Serveris pasileido: http://localhost:${port}`);
});
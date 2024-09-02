import express from 'express';
import { pageHome } from './pages/pageHome.js';
import { page404 } from './pages/page404.js';
import { pageAbout } from './pages/pageAbout.js';
import { pageViewAllAccounts } from './pages/pageViewAllAccounts.js';
import { pageCreateAccount } from './pages/pageCreateAccount.js';

const app = express();
const port = 5036;

app.use(express.static('public'));

// app.use((req, res, next) => {
//     console.log('>>>, req.url');
//     next();
// }, (req, res, next) => {
//     console.log(Date.now());
//     next();
// });

app.get('/', (req, res) => {
    return res.send(pageHome());
});

app.get('/about', (req, res) => {
    return res.send(pageAbout());
});

app.get('/create-account', (req, res) => {
    return res.send(pageCreateAccount());
});

app.get('/accounts', (req, res) => {
    return res.send(pageViewAllAccounts());
});

app.get('*', (req, res, next) => {
    console.log('---', req.url);
    next();
}, (req, res) => {
    return res.send(page404());
});

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
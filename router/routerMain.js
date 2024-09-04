import express from 'express';
import { pageHome } from '../pages/pageHome.js';
import { page404 } from '../pages/page404.js';
import { pageAbout } from '../pages/pageAbout.js';
import { pageViewAllAccounts } from '../pages/pageViewAllAccounts.js';
import { pageCreateAccount } from '../pages/pageCreateAccount.js';
import { routerApi } from './api/routerApi.js';

export const routerMain = express.Router();

routerMain.get('/', (req, res) => {
    return res.send(pageHome());
});

routerMain.use('/api', routerApi);

routerMain.get('/about', (req, res) => {
    return res.send(pageAbout());
});

routerMain.get('/create-account', (req, res) => {
    return res.send(pageCreateAccount());
});

routerMain.get('/accounts', (req, res) => {
    return res.send(pageViewAllAccounts());
});

routerMain.get('*', (req, res, next) => {
    console.log('---', req.url);
    next();
}, (req, res) => {
    return res.send(page404());
});
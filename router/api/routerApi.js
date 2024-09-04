import express from 'express';
import { routerApiAccount } from './account/routerApiAccount.js';

export const routerApi = express.Router();

routerApi.use('/account', routerApiAccount);
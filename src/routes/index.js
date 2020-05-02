/**
 * @namespace Router
 */
import { Router } from 'express';
import RouteInstance from './RouteInstance';

const router = Router();
router.get('/test', (req, res) => res.sendStatus(200));
const routeInstance = new RouteInstance(router, 'app');
export default [routeInstance.middleware].filter(Boolean);
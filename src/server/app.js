import express from 'express';
import config from './config.js';
const app = express();
config(app, process.env.NODE_ENV === 'development');
export default app;

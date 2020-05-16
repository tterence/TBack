import supertest from 'supertest';

const request = supertest();
/** @global */
global.request = request;
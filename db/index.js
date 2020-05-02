import pgp from 'pg-promise';
import { get } from 'config';

const { db: dbParams } = get('db');
const db = pgp()(dbParams);

export default db;
import { Client } from 'pg';

const postgresClient = new Client({
	user: process.env.POSTGRESS_USER,
	host: process.env.POSTGRESS_HOST,
	database: process.env.POSTGRESS_DATABASE,
	password: process.env.POSTGRESS_PASS,
	port: parseInt(process.env.POSTGRESS_PORT, 10),
});

postgresClient.connect();

export { postgresClient };

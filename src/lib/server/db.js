import { AttemptsMiddleware } from '../utils/AttemptsMiddleware';
import { Middleware } from '../utils/Middleware';

class Database {
	constructor() {
		this.loginMiddleware = Middleware.link(new AttemptsMiddleware(3));
		this.users = new Map();
		this.users.set('javier.varela.p0@gmail.com', 'admin');
	}

	login({ email, password }) {
		console.log('manejando');
		return this.loginMiddleware.handle({ email, password });
	}

	userExists(email) {
		return this.users.has(email);
	}
}

export const db = new Database();

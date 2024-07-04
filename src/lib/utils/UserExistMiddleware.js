import { Middleware } from './Middleware';

class UserExistMiddleware extends Middleware {
	constructor(db) {
		super();
		this.db = db;
	}

	handle({ email }) {
		if (!this.db.userExists(email)) return { succes: false, message: 'Usuario no existe' };

		this.handleNext({ email });
	}
}

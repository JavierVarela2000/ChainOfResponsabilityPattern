import { Middleware } from './Middleware';

export class AttemptsMiddleware extends Middleware {
	constructor(intentosPorMinuto) {
		super();
		this.intentosPorMinuto = intentosPorMinuto;
		this.intentos = 0;
		this.currentTime = Date.now();
	}

	handle(request) {
		if (Date.now() > this.currentTime + 60000) this.intentos = 0;

		this.intentos++;

		if (this.intentos > this.intentosPorMinuto)
			return { succes: false, message: 'Limite de intentos exedidos' };

		this.handleNext(request);
	}
}

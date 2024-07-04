export class Middleware {
	constructor() {
		this.next = null;
	}

	static link(first, ...chain) {
		let head = first;
		for (let nextInChain of chain) {
			head.next = nextInChain;
			head = nextInChain;
		}
		return first;
	}

	// eslint-disable-next-line no-unused-vars
	handle(request) {
		throw new Error('Metodo no implementado');
	}

	handleNext(request) {
		if (!this.next) return { success: true };

		this.next.handle(request);
	}
}

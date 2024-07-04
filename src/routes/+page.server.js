/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, locals: { db } }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const response = db.login({ email, password });
		console.log(response);
	}
};

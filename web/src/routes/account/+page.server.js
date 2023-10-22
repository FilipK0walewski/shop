export const actions = {
	default: async ({ cookies, request }) => {
        console.log(cookies.get('userid'))
		const data = await request.formData();
        console.log(data)
		// db.createTodo(cookies.get('userid'), data.get('description'));
	}
};
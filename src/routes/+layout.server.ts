/**
 * Loads the layout for the server-side rendering.
 * @param {Object} options - The options object.
 * @param {Object} options.locals - The locals object containing the authentication information.
 * @returns {Promise<Object>} - A promise that resolves to an object with the loggedIn property indicating if the user is logged in.
 */
export const load = async ({ locals }) => {
	const session = await locals.auth.validate();

	return { loggedIn: !!session };
};
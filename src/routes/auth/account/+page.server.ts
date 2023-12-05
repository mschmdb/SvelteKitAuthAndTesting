import { redirect } from '@sveltejs/kit';

/**
 * Loads the user data for the account page.
 * 
 * @param {Object} options - The options object.
 * @param {Object} options.locals - The locals object containing the authentication data.
 * @returns {Promise<Object>} The user data for the account page.
 * @throws {Error} If the user is not authenticated, it redirects to the signup page.
 */
export const load = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/auth/signup');
	return {
        user: session.user.name,
		userId: session.user.userId as string,
		userName: session.user.username as string,
        
	};
};
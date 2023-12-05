import { auth } from '$lib/server/lucia';
import { redirect } from '@sveltejs/kit';

/**
 * Handles the GET request for the logout route.
 * Clears out the user's sessions, invalidates the session, removes the cookie, and redirects to the login page.
 * @param {Object} locals - The locals object containing the auth module.
 * @throws {Error} - If the user is not authenticated, it throws a redirect error to the profile page.
 * @throws {Error} - If there is an error invalidating the session, it throws a redirect error to the login page.
 * @returns {void}
 */
export const GET = async ({ locals }) => {
	// clear out the user's sessions
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/profile');
	await auth.invalidateSession(session.sessionId); // invalidate session
	locals.auth.setSession(null); // remove cookie
	throw redirect(302, '/auth/login');
};
import { auth } from '$lib/server/lucia'
import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

/**
 * Loads the server-side data for the signup page.
 * 
 * @param {PageServerLoadParams} params - The parameters for the page server load function.
 * @returns {Promise<void>} - A promise that resolves when the server-side data is loaded.
 */
export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (session) {
        throw redirect(302, '/');
    }
}

/**
 * Handles the default action for the signup page.
 * 
 * @param request - The HTTP request object.
 * @param locals - The SvelteKit locals object.
 * @returns A promise that resolves to a redirect response or throws an error.
 */
export const actions: Actions = {
    default: async ({ request, locals }) => {
        const { name, username, password } = Object.fromEntries(await request.formData()) as Record<string, string>;
        try {
            const user = await auth.createUser({
                key: {
                    providerId: 'username',
                    providerUserId: username,
                    password
                },
                attributes: {
                    name,
                    username
                }
            });
            console.log("user?", user);
            const session = await auth.createSession({
                userId: user.userId,

                attributes: {
                    
                }
            });
            locals.auth.setSession(session);
        } catch (err) {
            console.error(err);
            return fail(400, { message: 'Could not register user' });
        }
        throw redirect(302, '/auth/login');
    }
}

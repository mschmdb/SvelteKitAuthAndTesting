import { auth } from "$lib/server/lucia";
import type { Handle } from "@sveltejs/kit";

/**
 * Middleware handle function that adds authentication handling to the SvelteKit server.
 * @param {HandleEvent} options - The options object containing the event and resolve properties.
 * @returns {Promise<unknown>} - A promise that resolves to the result of the resolve function.
 */
export const handle: Handle = async ({ event, resolve }) => {
	// we can pass `event` because we used the SvelteKit middleware
	event.locals.auth = auth.handleRequest(event);
	return await resolve(event);
};
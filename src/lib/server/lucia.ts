import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { postgres as postgresAdapter } from "@lucia-auth/adapter-postgresql";
import postgres from "postgres";
import { PRIVATE_NEON_URL } from "$env/static/private";

const sql = postgres(PRIVATE_NEON_URL);

/**
 * Initializes the authentication middleware using Lucia.
 * @param {boolean} dev - Indicates whether the environment is development or production.
 * @param {Function} sveltekit - The middleware function for SvelteKit.
 * @param {Object} sql - The SQL configuration object.
 * @returns {Object} - The authentication object.
 */
export const auth = lucia({
    env: dev ? "DEV" : "PROD",
    middleware: sveltekit(),
    adapter: postgresAdapter(sql, {
        user: "auth_user",
        key: "user_key",
        session: "user_session"
    }),
    //define the user attributes to be stored in the session
    getUserAttributes: (data) => {
        return {
            userId: data.id,
            name: data.name,
            username: data.username,
        };
    }
});

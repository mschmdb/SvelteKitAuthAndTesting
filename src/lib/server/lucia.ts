import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { postgres as postgresAdapter } from "@lucia-auth/adapter-postgresql";
import postgres from "postgres";
import { PRIVATE_NEON_URL } from "$env/static/private";

const sql = postgres(PRIVATE_NEON_URL);

export const auth = lucia({
    env: dev ? "DEV" : "PROD",
    middleware: sveltekit(),
    adapter: postgresAdapter(sql, {
        user: "auth_user",
        key: "user_key",
        session: "user_session"
    }),
    getUserAttributes: (data) => {
        return {
            userId: data.id,
            name: data.name,
            username: data.username,
        };
    }
});

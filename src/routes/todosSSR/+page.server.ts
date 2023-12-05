import { PUBLIC_JSONPLACEHOLDER_URL } from "$env/static/public";

/**
 * Loads the posts from the JSONPlaceholder API.
 * @returns {Promise<{ posts: any[] }>} The loaded posts.
 */
export async function load() {
    const res = await fetch(`${PUBLIC_JSONPLACEHOLDER_URL}/todos?_page=1&_limit=30`);
    const posts = res.json();
    return {
        posts
    };
}
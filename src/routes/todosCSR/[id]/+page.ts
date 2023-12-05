import { PUBLIC_JSONPLACEHOLDER_URL } from "$env/static/public";

/**
 * Loads a post based on the provided ID.
 * @param {Object} params - The parameters object containing the ID.
 * @returns {Promise<{ post: Object }>} - A promise that resolves to an object containing the loaded post.
 */
export async function load({ params }) {
    const res = await fetch(`${PUBLIC_JSONPLACEHOLDER_URL}/posts/${params.id}/`);
    const post = res.json();
    return {
        post
    };
}
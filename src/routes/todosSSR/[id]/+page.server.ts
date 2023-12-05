import { PUBLIC_JSONPLACEHOLDER_URL } from "$env/static/public";

/**
 * Loads a post from the JSONPlaceholder API based on the provided ID.
 * @param params - The parameters object containing the ID of the post.
 * @returns An object containing the loaded post.
 */
export async function load({ params }) {
    const res = await fetch(`${PUBLIC_JSONPLACEHOLDER_URL}/posts/${params.id}/`);
    const post = res.json();
    return {
        post
    };
}
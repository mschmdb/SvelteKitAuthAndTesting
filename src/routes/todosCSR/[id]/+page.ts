import { PUBLIC_JSONPLACEHOLDER_URL } from "$env/static/public";
export async function load({ params }) {
    const res = await fetch(`${PUBLIC_JSONPLACEHOLDER_URL}/posts/${params.id}/`);
    const post = res.json();
    return {
        post
    };
}
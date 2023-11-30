import { PRIVATE_JSONPLACEHOLDER_URL } from "$env/static/private";
export async function load({ params }) {
    const res = await fetch(PRIVATE_JSONPLACEHOLDER_URL+`/posts/${params.id}/`);
    const post = res.json();
    return {
        post
    };
}
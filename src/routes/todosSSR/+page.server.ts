import { PRIVATE_JSONPLACEHOLDER_URL } from "$env/static/private";
export async function load() {
    const res = await fetch(PRIVATE_JSONPLACEHOLDER_URL+'/todos?_page=1&_limit=30');
    const posts = res.json();
    return {
        posts
    };
}
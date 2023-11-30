import { PUBLIC_JSONPLACEHOLDER_URL } from "$env/static/public";
export async function load() {
    const res = await fetch(PUBLIC_JSONPLACEHOLDER_URL+'/todos?_page=1&_limit=30');
    const posts = res.json();
    return {
        posts
    };
}
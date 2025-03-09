import { cats } from './categories.js';

export function load() {
    return {
        summaries: cats.map(category => ({
            page_title: category.page_title,
            cat: category.cat,
            imgs: category.imgs,
        })),
    };
}

export const prerender = true;

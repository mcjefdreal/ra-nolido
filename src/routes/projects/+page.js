import { cats } from './categories.js';

export function load() {
    return {
        summaries: cats.map(category => ({
            page_title: category.page_title,
            cat: category.cat,
            link: category.link,
            icon: category.icon,
        })),
    };
}

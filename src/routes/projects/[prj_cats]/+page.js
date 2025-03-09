import { error } from '@sveltejs/kit';
import { cats } from '../categories.js';

export function load({ params }) {
    const categ = cats.find(categ => categ.page_title === params.prj_cats);

    if (!categ) error(404);

    return {
        categ,
    };
}

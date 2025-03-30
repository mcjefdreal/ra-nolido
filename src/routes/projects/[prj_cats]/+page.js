import { cats } from '../categories.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const categ = cats.find(categ => categ.page_title === params.prj_cats);

    if (!categ) error(404);

    return {
        categ,
    };
}

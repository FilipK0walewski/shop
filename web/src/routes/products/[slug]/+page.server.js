import { error } from '@sveltejs/kit';

export function load({ params }) {

    const slug = params.slug

	if (slug === '123') throw error(404);

    console.log(slug)
	return {
		slug
	};
}
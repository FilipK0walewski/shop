import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react"

export const loader = async ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category')
    const sex = url.searchParams.get('sex')

    const urlSearchParams = new URLSearchParams()
    if (category !== null) { urlSearchParams.append('category', category) }
    if (sex != null) { urlSearchParams.append('sex', sex) }

    const apiUrl = new URL('http://127.0.0.1:8000/products');
    apiUrl.search = urlSearchParams.toString()
    const res = await fetch(apiUrl.toString())
    return json(await res.json())
}

export default function ProductsPage() {
    const data = useLoaderData()

    return (
        <>
            <ul>
                {data.products.map(product => (
                    <li key={product.slug}>
                        <Link to={product.slug}>
                            <img src={product.image_url} alt="Zdjęcie produktu" />
                            <p>{product.name}</p>
                            <span>{product.price} zł</span>
                        </Link>
                    </li>
                ))}
            </ul>

            <p>lista produktów</p>
        </>
    )
}
import { json } from "@remix-run/node";
import { NavLink, useLoaderData } from "@remix-run/react"

export const loader = async ({ params }) => {
    const res = await fetch(`http://127.0.0.1:8000/products/${params.slug}`)
    return json(await res.json())
}

export default function Product() {
    const productData = useLoaderData()

    return (
        <>
            <h3>{productData.name}</h3>

            <NavLink to={`/products?category=${productData.category.slug}`}>{productData.category.name}</NavLink>

            <p>{productData.price}</p>
            <img src={productData.image_url} alt="Zdjęcie" />
            <p>{productData.description_short}</p>
            <div dangerouslySetInnerHTML={{ __html: productData.description_full }}></div>
        </>
    )
}
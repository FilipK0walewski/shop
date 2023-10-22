import { useState } from "react"
import { Link } from "@remix-run/react"

import CustomButton from "../components/button"

export default function Component() {
    // renders the UI

    const [count, setCount] = useState(0)

    return (
        <>
            <header>
                <ul>
                    <li><Link to={'/dupa'}>test</Link></li>
                </ul>
            </header>
            <main>
                <h1>Strona domowa</h1>
                <CustomButton />
            </main>
            <footer></footer>
        </>
    )
}

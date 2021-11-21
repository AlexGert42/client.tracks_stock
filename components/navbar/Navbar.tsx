import stls from '@/styles/conponents/Navbar.module.sass'
import {useState} from "react";
import Link from 'next/link'




export const Navbar = () => {
    const [open, setOpen] = useState(false)

    const clickHandler = () => {
        setOpen(!open)
    }

    return (
        <div className={stls.container}>
            <header className={stls.header}>
                <button className={stls.btn} onClick={clickHandler}>Menu</button>
            </header>

            {
                open &&
                    <div className={stls.content}>
                        <ul className={stls.list}>
                            <li className={stls.item}>
                                <Link href="/tracks">
                                    <a>Track</a>
                                </Link>
                                </li>
                            <li className={stls.item}>
                                <Link href="/picture">
                                    <a >Picture</a>
                                </Link>

                            </li>
                        </ul>
                    </div>
            }

        </div>
    )
}
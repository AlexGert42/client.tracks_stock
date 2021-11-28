import stls from '@/styles/conponents/Navbar.module.sass'
import Link from 'next/link'


type NavbarType = {
    flag: boolean
}

export const Navbar: React.FC<NavbarType> = ({flag}) => {
    return (
        <>
            {
                flag && <div className={stls.content}>
                    <ul className={stls.list}>
                        <li className={stls.item}>
                            <Link href="/tracks">
                                <a>Track</a>
                            </Link>
                        </li>
                        <li className={stls.item}>
                            <Link href="/picture">
                                <a>Picture</a>
                            </Link>

                        </li>
                    </ul>
                </div>
            }
        </>
    )
}
import {Navbar} from "../navbar/Navbar"
import {useState} from "react";
import {Header} from "@/components/header/Header";
import { Player } from "../common/player/Player";


export const Main: React.FC = ({children}) => {
    const [open, setOpen] = useState(false)
    const handlerNavbar = () => setOpen(!open)


    return (
        <>
            <Header clickHandler={handlerNavbar}/>
            <Navbar flag={open}/>
            {children}
            <Player/>
        </>
    )
}
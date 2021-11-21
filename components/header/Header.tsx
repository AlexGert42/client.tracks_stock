import stls from "@/styles/conponents/Header.module.sass";


type HeaderType = {
    clickHandler: () => void
}

export const Header: React.FC<HeaderType> = ({clickHandler}) => {

    return (
           <header className={stls.container}>
               <button className={stls.btn} onClick={clickHandler}>Menu</button>
           </header>
    )
}
import { Navbar } from "../navbar/Navbar"



export const Main: React.FC = ({children}) => {

    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}
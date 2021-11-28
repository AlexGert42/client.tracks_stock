import { AppProps } from "next/dist/shared/lib/router/router"
import '@/styles/global/_global.scss'
import { FC } from "react"
import {wrapper} from "../store";

export const App: FC<AppProps> = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <Component {...pageProps}/>
        </>
    )
}

export default wrapper.withRedux(App)
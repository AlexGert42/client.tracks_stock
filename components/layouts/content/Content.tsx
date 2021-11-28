import stls from '@/styles/layouts/Content.module.sass'
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";

interface TypeContent {
    row?: boolean
}

export const Content: React.FC<TypeContent> = ({children, row = true}) => {

    const [title, setTitle] = useState('')
    const router = useRouter()

    useEffect(() => {
        switch (router.asPath) {
            case '/picture':
                setTitle('Picture')
                break
            case '/tracks':
                setTitle('Tracks')
                break
        }
    }, [])


    return (
        <main className={stls.container}>
            {title && <h1 className={stls.title}>{title}</h1>}
            <div className={row ? stls.inner : stls.inner_column}>
                {children}
            </div>
        </main>
    )
}


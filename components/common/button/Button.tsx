import stls from '@/styles/common/button/Button.module.sass'


export const Button = ({...props}) => {
    return (
        <button className={stls.base} {...props}>{props.children}</button>
    )
}
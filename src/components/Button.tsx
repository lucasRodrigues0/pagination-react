import { PropsWithChildren } from "react";

interface props {
    onClick?: any,
    disabled: any
}

export const Button = ({ children, onClick, disabled }: PropsWithChildren & props) => {

    const style = disabled ? "opacity-0" : "h-10 text-gray-600 font-bold text-2xl"

    return (
        <button className={style} onClick={onClick} disabled={disabled}>
            {
                children
            }
        </button>
    )
}
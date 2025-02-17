import { PropsWithChildren } from "react";

interface props {
    onClick?: any,
    disabled: any
}

export const Button = ({ children, onClick, disabled }: PropsWithChildren & props) => {

    const style = disabled ? "h-10 rounded-md text-gray-300 text-2xl" : "h-10 text-gray-600 font-bold text-2xl"

    return (
        <button className={style} onClick={onClick} disabled={disabled}>
            {
                children
            }
        </button>
    )
}
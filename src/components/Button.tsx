import { PropsWithChildren } from "react";

interface props {
    onClick: any,
    disabled: any
}

export const Button = ({ children, onClick, disabled }: PropsWithChildren & props) => {

    const style = disabled ? "w-[150px] h-10 rounded-md text-gray-300 bg-gray-100" : "w-[150px] h-10 bg-gray-100 rounded-md text-gray-600 shadow-md hover:shadow-xl transition-all"

    return (
        <button className={style} onClick={onClick} disabled={disabled}>
            {
                children
            }
        </button>
    )
}
import { PropsWithChildren } from "react";

interface props {
    onClick: any,
    disabled: any
}

export const Button = ({ children, onClick, disabled }: PropsWithChildren & props) => {
    return (
        <button className="w-[150px] h-10 bg-gray-100 rounded-md text-gray-600 shadow-md hover:shadow-xl transition-all" onClick={onClick} disabled={disabled}>
            {
                children
            }
        </button>
    )
}
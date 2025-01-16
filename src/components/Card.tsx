import { PropsWithChildren } from "react";

export const Card = ({children}: PropsWithChildren) => {
    return (
        <div className="bg-white shadow-md my-2 min-w-[400px] max-w-[400px] min-h-[150px] flex flex-col wrap">
            {
                children
            }
        </div>
    )
}
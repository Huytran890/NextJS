"use client"

import { ReactNode } from "react";

type TooltipProps = {
    children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children }) => {
    return (
        <div className="absolute right-full top-1/2 transform -translate-x-1 -translate-y-1/2 whitespace-nowrap bg-blue-500 text-white px-2 py-1 text-sm font-normal capitalize rounded-2xl shadow-md opacity-0 transition-all ease-in duration-300 pointer-events-none peer-hover:opacity-100">
            {children}
        </div>
    )
}

export default Tooltip
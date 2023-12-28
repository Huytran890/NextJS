"use client"

import { cn } from "@/utils/libs";
import { memo } from "react";

type ButtonProps = {
    children?: React.ReactNode,
    className?: string,
    onclick?: () => void,
    active?: boolean;
    type?: 'submit' | 'reset' | 'button' | undefined;
}

const SecondaryButton: React.FC<ButtonProps> = ({
    children,
    className,
    onclick,
    active,
    type = 'button'
}) => {
    const transition = "transition-all ease-linear duration-[350]";
    return (
        <button type={type} className={
            cn(`flex items-center gap-x-2 text-base whitespace-nowrap capitalize py-2.5 px-5 mr-2 font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-200 ${transition}`, className,
                {
                    "!bg-black !text-white": active
                }
            )
        }
            onClick={onclick}
        >
            {children}
        </button >
    )
}

export default memo(SecondaryButton)
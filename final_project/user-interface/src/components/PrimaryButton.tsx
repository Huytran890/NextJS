"use client"

import { cn } from "@/utils/libs";
import { memo } from "react";

type ButtonProps = {
    children?: React.ReactNode,
    className?: string;
    onclick?: () => void;
}

const PrimaryButton: React.FC<ButtonProps> = ({
    children,
    className,
    onclick
}) => {
    const transition = "transition-all ease-linear duration-[350]";
    return (
        <div className="flex gap-2">
            <button
                className={
                    cn(`bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${transition}`,
                        className,
                    )
                }
                onClick={onclick}
            >
                {children}
            </button>
        </div >
    )
}

export default memo(PrimaryButton)
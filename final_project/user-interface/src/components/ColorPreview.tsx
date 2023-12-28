"use client"

import { cn } from '@/utils/libs';
import React from 'react'

type TColorPreview = {
    color?: string
}

const transition300 = 'transition-all ease-linear duration-300';

type ColorPreviewProps = TColorPreview & {
    className?: string;
    description: string;
    setDesColor: (description: string) => void;
}

const ColorPreview: React.FC<ColorPreviewProps> = ({ color, className, description, setDesColor }) => {

    return (
        <span className={cn(`inline-block relative w-9 h-5 border border-solid border-[#333] rounded-[15px] hover:after:absolute hover:after:content-[''] hover:after:top-1/2 hover:after:left-1/2 hover:after:transform hover:after:-translate-x-1/2 hover:after:-translate-y-1/2 hover:after:inline-block hover:after:w-[41px] hover:after:h-[26px] hover:after:rounded-[15px] hover:after:border hover:after:border-gray-500 hover:after:border-solid hover:after:cursor-pointer ${transition300}`, className)} onClick={() => setDesColor(description)} style={{ backgroundColor: `${color}` }} />
    )
}

export default ColorPreview
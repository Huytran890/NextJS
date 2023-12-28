"use client"

import { TProductSize } from '@/utils/type';
import React, { useState } from 'react'

type TSizeBlog = TProductSize & {
    setSize: (size: string) => void;
}

const SizeBlog: React.FC<TSizeBlog> = ({ id, size, setSize }) => {
    const [active, setActive] = useState('');

    const handleClick = (e: any) => {
        e.preventDefault();
        const inputElement = e.target
        setSize(e.target.value)
        setActive(inputElement.id);
    }

    return (
        <input id={id} type='button' value={size} onClick={handleClick} className={`w-10 h-9 text-sm uppercase bg-white text-[#333] transition-all ease-linear duration-500 rounded-md
        hover:bg-black hover:text-white ${active ? 'focus:bg-black focus:text-white' : ''}`}></input>
    )
}

export default SizeBlog
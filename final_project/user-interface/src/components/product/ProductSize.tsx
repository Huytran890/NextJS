"use client"

import React from 'react'
import SizeBlog from './SizeBlog';
import { TProductSize } from '@/utils/type';

type ProductSizeProps = {
    sizes: TProductSize[];
    setSize: (size: string) => void;
}

const ProductSize: React.FC<ProductSizeProps> = ({ sizes, setSize }) => {
    return (
        <div className='w-[calc(100%-48px)] mx-auto backdrop-blur-[50px] px-2 py-4 flex items-center gap-1 flex-wrap rounded-lg'>
            {sizes.map((value, index) => (
                <SizeBlog key={index} size={value.size} setSize={setSize} id={value.id} />
            ))}
        </div>
    )
}

export default ProductSize
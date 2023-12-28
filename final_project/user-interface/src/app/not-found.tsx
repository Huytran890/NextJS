'use client'

import ThirdButton from '@/components/ThirdButton'
import { ImageError } from '@/utils/Images'
import Image from 'next/image'

export default function NotFound() {

    return (
        <main className='w-full h-[calc(100%-115px)]'>
            <div className="w-full h-full flex items-center justify-center gap-x-6">
                <Image src={ImageError} alt="Not Found" width={500} height={500} className="max-w-[360px] max-h-[360px] object-cover" />
                <div>
                    <h3 className="text-[40px] font-semibold leading-normal tracking-tight">Page Not Found</h3>
                    <p className="text-blue-500 capitalize text-xl font-medium leading-normal tracking-tight mb-4">Please click here to go back to home page </p>
                    <ThirdButton navigate="/">
                        return to home
                    </ThirdButton>
                </div>
            </div>
        </main>

    )
}
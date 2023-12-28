"use client"

import Link from "next/link"

type ThirdButtonProps = {
    children: React.ReactNode;
    navigate: string;
    disable?: boolean;
}

const ThirdButton: React.FC<ThirdButtonProps> = ({ children, navigate, disable }) => {

    return (
        <Link href={navigate} className={`${disable ? 'pointer-events-none' : ''} relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-semibold rounded-full border border-solid border-blue-500 cursor-pointer group`}>
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-blue-500 opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-52 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-blue-500 opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative capitalize w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                {children}
            </span>
            <span className="absolute inset-0 border-1 border-solid border-blue-500 rounded-full"></span>
        </Link>
    )
}

export default ThirdButton
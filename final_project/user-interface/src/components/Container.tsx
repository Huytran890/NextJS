"use client"

import { CustomComponentPros } from "@/utils/type"
import { cn } from "@/utils/libs"
import { useEffect, useState } from "react"

const Container = ({ children, className }: CustomComponentPros) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className={cn('container mx-auto w-5/6 py-3', className)}>{isClient && children}</div>
    )
}

export default Container
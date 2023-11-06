'use client'

import StoreModal from "@/components/modal/StoreModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    //! neu la server-side render thi no se khong bi loi hydration boi vi minh dang dan xen server va client render

    if (!isMounted) {
        return null
    }

    return (
        <>
            <StoreModal />
        </>
    )
}
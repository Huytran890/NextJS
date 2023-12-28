"use client"

import { SwiperRef } from 'swiper/react'

const PreAndNext = ({ swiperRef }: { swiperRef: React.RefObject<SwiperRef> }) => {
    return (
        <div className="prev-and-next">
            <div className="swiper-button-next" onClick={() => swiperRef?.current?.swiper.slideNext()}></div>
            <div className="swiper-button-prev" onClick={() => swiperRef?.current?.swiper.slidePrev()}></div>
        </div>
    )
}

export default PreAndNext
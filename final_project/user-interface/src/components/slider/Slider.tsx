"use client"

import React, { ReactNode } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { PaginationOptions } from 'swiper/types';
import { cn } from '@/utils/libs';

//! Record là khai báo kiểu cho key, value
type SliderProps<T> = {
    slides?: T[];
    props?: Record<string, boolean | PaginationOptions | undefined>;
    css?: string;
    render?: (item: T) => ReactNode;
};

export const Slider = React.forwardRef<SwiperRef, SliderProps<T>>(({ slides, props, css, render }: SliderProps<T>, ref) => {
    const { pagination, ...swiperProps } = props || {};

    return (
        <>
            <Swiper
                {...swiperProps}
                ref={ref}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                speed={2000}
                slidesPerView={1}
                pagination={pagination}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                {slides && slides.map((item, index) => (
                    <SwiperSlide key={index} className={cn('', css)}>
                        {render && render(item)}
                    </SwiperSlide>
                )
                )}
            </Swiper>
        </>
    );
});

Slider.displayName = 'Slider';
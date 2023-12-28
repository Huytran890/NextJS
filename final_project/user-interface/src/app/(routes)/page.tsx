"use client"

import { useRef } from "react";
import Container from "@/components/Container";
import ThirdButton from "@/components/ThirdButton";
import { Slider } from "@/components/slider/Slider";
import { bannerCollections, images, productSpecials, products } from "@/utils/data";
import { TImage, TProduct } from "@/utils/type";
import { SwiperRef } from "swiper/react";
import ProductCard from "@/components/product/ProductCard";
import BannerSlider from "@/components/BannerSlider";
import BannerPrimary from "@/components/BannerPrimary";
import { BannerPrimaryImage1, BannerPrimaryImage2, BannerPrimaryImage3, BannerPrimaryImage4, BannerSub1, BannerSub2, DecorBanner1 } from "@/utils/Images";
import SharedHeading from "@/components/SharedHeading";
import ReadMoreLink from "@/components/ReadMoreLink";
import BannerCollection from "@/components/BannerCollection";


const HomePage = () => {
    const swiperRef = useRef<SwiperRef | null>(null);
    // const ref = useRef<null | HTMLDivElement>(null);

    return (
        <main className="w-full h-full">
            <section className="mb-10">
                <div className="relative w-full h-auto -mt-3">
                    <button title="preBtn"
                        onClick={() => swiperRef.current?.swiper.slidePrev()} className="absolute right-4 top-1/3 w-10 h-10 text-white flex items-center justify-center cursor-pointer hover:opacity-60 z-10 transition-all ease-linear duration-500">
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33258 10.7751L8.84713 18.2898C9.06163 18.5043 9.34753 18.6221 9.65238 18.6221C9.95756 18.6221 10.2433 18.5042 10.4578 18.2898L11.1401 17.6074C11.3544 17.3932 11.4725 17.1072 11.4725 16.8021C11.4725 16.4973 11.3544 16.2016 11.1401 15.9874L6.75618 11.5939L20.684 11.5939C21.3119 11.5939 21.8081 11.1023 21.8081 10.4742L21.8081 9.50938C21.8081 8.88125 21.3119 8.34007 20.684 8.34007L6.70645 8.34007L11.1399 3.92202C11.3542 3.70752 11.4723 3.42923 11.4723 3.12422C11.4723 2.81954 11.3542 2.5372 11.1399 2.32286L10.4576 1.64262C10.2431 1.42812 9.95739 1.31122 9.65221 1.31122C9.34736 1.31122 9.06146 1.42964 8.84696 1.64415L1.33241 9.15869C1.1174 9.37387 0.999148 9.66112 0.999994 9.96648C0.999317 10.2728 1.1174 10.5603 1.33258 10.7751Z" stroke="#F3F5F6"></path>
                        </svg>
                    </button>
                    <Slider<TImage>
                        slides={images}
                        ref={swiperRef}
                        props={{
                            pagination: false,

                        }}
                        render={(item) => (
                            <BannerSlider image={item.image} />
                        )}
                    />
                    <button title="nextBtn"
                        onClick={() => swiperRef.current?.swiper.slideNext()} className="absolute right-4 top-1/2 w-10 h-10 text-white flex items-center justify-center cursor-pointer hover:opacity-60 z-10 transition-all ease-linear duration-500">
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.4755 7.84696L12.961 0.33225C12.7465 0.117742 12.4606 0 12.1557 0C11.8505 0 11.5648 0.117912 11.3503 0.33225L10.668 1.01468C10.4537 1.22885 10.3356 1.51492 10.3356 1.81993C10.3356 2.12478 10.4537 2.42049 10.668 2.63466L15.0519 7.02818H1.12414C0.496176 7.02818 0 7.51979 0 8.14792V9.11269C0 9.74082 0.496176 10.282 1.12414 10.282H15.1017L10.6682 14.7C10.4539 14.9146 10.3358 15.1928 10.3358 15.4979C10.3358 15.8025 10.4539 16.0849 10.6682 16.2992L11.3505 16.9794C11.565 17.194 11.8507 17.3109 12.1559 17.3109C12.4607 17.3109 12.7466 17.1924 12.9611 16.9779L20.4757 9.46338C20.6907 9.2482 20.809 8.96095 20.8081 8.6556C20.8088 8.34923 20.6907 8.06181 20.4755 7.84696Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
            </section>

            <section className="mb-10">
                <Container>
                    <div className="flex gap-x-4">
                        <ThirdButton navigate={'/'}>New Collection</ThirdButton>
                        <ThirdButton navigate={'/'}>Best Seller</ThirdButton>
                    </div>
                </Container>
            </section>

            <section className="mb-10">
                <Container>
                    <Slider<TProduct>
                        slides={products}
                        props={{
                            pagination: false,
                            breakpoints: {
                                425: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                    spaceBetween: 20,
                                },
                                1440: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                    spaceBetween: 20,
                                },
                            },
                        }}
                        render={(item) => (
                            <ProductCard items={item} />
                        )}
                    />
                </Container>
            </section>

            <section className="mb-10">
                <BannerPrimary
                    title="Quần dài nam"
                    description="Đa dạng lựa chọn dành cho bạn"
                    highlightDes="Nhập mã PANT tặng T-Shirt Cotton 200gsm"
                    image={BannerPrimaryImage1}
                />
            </section>

            <section className="mb-10">
                <Container>
                    <div className="flex items-center justify-between gap-x-2 mb-2">
                        <SharedHeading title="Sản phẩm quần dài nam" />
                        <ReadMoreLink />
                    </div>
                    <div className="grid grid-cols-4 gap-x-2">
                        {productSpecials.map(product => (
                            <ProductCard key={product.id} items={product} />
                        ))}
                    </div>
                </Container>
            </section>

            <section className="mb-10">
                <BannerPrimary
                    title={`BST\nTHU ĐÔNG`}
                    image={BannerPrimaryImage2}
                />
            </section>

            <section className="mb-10">
                <Container>
                    <div className="flex items-center justify-between gap-x-2 mb-2">
                        <SharedHeading title="SẢN PHẨM THU ĐÔNG" />
                        <ReadMoreLink />
                    </div>
                    <div className="grid grid-cols-4 gap-x-2">
                        {productSpecials.map(product => (
                            <ProductCard key={product.id} items={product} />
                        ))}
                    </div>
                </Container>
            </section>

            <section className="mb-10">
                <BannerPrimary
                    title='RUNNING COLLECTION'
                    description="Mang đến sự thoáng mát trên suốt đường chạy"
                    highlightDes="Nhập mã CMGIFT499K tặng áo essential cho đơn 499k"
                    image={BannerPrimaryImage3}
                />
            </section>

            <section className="mb-10">
                <Container>
                    <div className="flex items-center justify-between gap-x-2 mb-2">
                        <SharedHeading title="SẢN PHẨM CHẠY BỘ" />
                        <ReadMoreLink />
                    </div>
                    <div className="grid grid-cols-4 gap-x-2">
                        {productSpecials.map(product => (
                            <ProductCard key={product.id} items={product} />
                        ))}
                    </div>
                </Container>
            </section>

            <section className="mb-10">
                <Container>
                    <BannerPrimary
                        title={`Góp phần mang lại cuộc\n`}
                        image={BannerPrimaryImage4}
                        decorImages={DecorBanner1}
                    />

                    <div className="grid grid-cols-2 gap-x-5 my-12 w-full h-full">
                        <BannerPrimary
                            title={`MỜI BẠN\nCHUNG VUI`}
                            subTitle="CM24 MỘT TUỔI"
                            image={BannerSub1}
                        />
                        <BannerPrimary
                            title={`BASKETBALL\nCOLLECTION`}
                            subTitle="84RISING - STREETWEAR"
                            image={BannerSub2}
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-x-2">
                        {bannerCollections.map((banner, index) => {
                            return (
                                <BannerCollection key={`banner_collection-${index}`} items={banner} />
                            )
                        })}
                    </div>
                </Container>
            </section>

            <section className="h-[300px]">

            </section>

        </main>
    );
}

export default HomePage;
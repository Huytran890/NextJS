"use client"

import BadgeProduct from "./BadgeProduct"
import ColorPreview from "../ColorPreview"
import ProductSize from "./ProductSize"
import ActionButton from "./ActionButton";
import { useCallback, useState } from "react";
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Tooltip from "../Tooltip";
import { TProduct, TProductCart } from "@/utils/type";
import { Expand, ShoppingCart, Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";

const transition500 = 'transition-all ease-linear duration-500';

type TProductCard = {
    items: TProduct;
}

const ProductCard = ({ items }: TProductCard) => {
    const router = useRouter()
    const [desColor, setDesColor] = useState<string>("green color");
    const [size, setSize] = useState<string>("s");

    const orderDetail: TProductCart = {
        id: items.id,
        nameProduct: items.nameProduct,
        initialPrice: items.initialPrice,
        price: items.price,
        percentSale: items.percentSale,
        color: desColor,
        size: size,
        image: items.image,
        imageSub: items.imageSub,
        comments: items.comments,
        promoteTitle: items.promoteTitle,
        star: items.star,
        status: items.status,
        quantity: 0,
    }

    const handleAddToCart = useCallback((product: TProductCart) => {

    }, []);


    const handleViewDetail = (id: string) => {
        router.push(`/product/${id}`)
    }
    
    return (
        <div className="relative">
            <div className="flex flex-col gap-y-2">
                <div className={`relative w-full aspect-[3/4] rounded-lg overflow-hidden ${transition500} cursor-pointer group`}>
                    <Link href={`/product/${items.id}`}>
                        <Image src={items.image} width={500} height={500} alt="Image product"
                            className={`w-full h-full object-cover 
                            ${!items.imageSub ? 'group-hover:transform group-hover:scale-[2] group-hover:cursor-zoom-in' : ''} 
                            ${transition500}`} />
                        {items.imageSub
                            ? <Image src={items.imageSub} width={500} height={500} alt="" className={`absolute left-0 top-0 opacity-0 
                        ${transition500} group-hover:opacity-100`} />
                            : <></>
                        }


                    </Link>

                    {items.imageSub
                        ? <span className="absolute left-[5%] bottom-0 w-[60%] h-[100px] pointer-events-none">
                            <Image src={items.imageSale as string} width={500} height={500} alt="Image sale" className="w-full h-full object-contain" />
                        </span>
                        : <></>
                    }

                    {items.productTag
                        ? <span className="absolute top-[14%] right-[6%] w-10 h-10">
                            <Image src={items.productTag as string} alt="product tag" width={500} height={500} className="h-full w-full object-cover" />
                        </span>
                        : <></>
                    }

                    <div className="absolute top-[5%] left-[5%] w-fit">
                        <div className="h-fit flex items-center gap-x-1 text-black">
                            <p className="flex items-center gap-x-1">
                                {items.star}
                                <span>
                                    <Star />
                                </span>
                            </p>
                            <p className="text-blue-500 font-semibold">({items.comments})</p>
                        </div>
                    </div>

                    <div className="absolute top-[4%] right-[5%]">
                        {items.status ? <BadgeProduct title={items.status} /> : <></>}
                    </div>

                    <div className="absolute top-[15%] -right-1/3 opacity-0 group-hover:opacity-100 group-hover:right-[8%] transition-all ease-linear duration-500">
                        <div className="h-auto flex flex-col items-center gap-y-2">
                            <div className="relative w-8 h-8 text-center">
                                <ActionButton className="peer" onClick={() => handleAddToCart(orderDetail)} icon={<ShoppingCart size={16} className='text-blue-500' />} />
                                <Tooltip>Add to cart</Tooltip>
                            </div>
                            <div className="relative w-8 h-8 text-center">
                                <ActionButton className="peer" onClick={() => handleViewDetail(items.id)} icon={<Expand size={16} className='text-blue-500' />} />
                                <Tooltip>View detail</Tooltip>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-1/3 w-full invisible group-hover:bottom-[5%] group-hover:opacity-100 transition-all ease-linear duration-500 group-hover:visible z-50">
                        <ProductSize sizes={items.sizes} setSize={setSize} />
                    </div>
                </div>

                <div className="flex flex-col gap-y-2">
                    <div className="flex items-center gap-x-3 gap-y-1">
                        {items.colors.map((value, index) => (
                            <ColorPreview setDesColor={setDesColor} description={value.descriptionColor} key={index} color={value.color} />
                        ))}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-sm leading-tight font-normal">{items.nameProduct}</h3>

                        <p className="text-sm font-light text-[#c4c4c4] pb-1">{desColor}</p>

                        <div className="flex items-center gap-x-3 mt-1">
                            <span className="text-sm text-[#242424] font-semibold">{items.price}</span>
                            {items.initialPrice ? <del className="text-sm text-[#c4c4c4] font-semibold">{items.initialPrice}</del> : <></>}
                            {items.percentSale ? <span className="text-sm text-red-500">{items.percentSale}</span> : <></>}
                        </div>
                    </div>

                    <div>
                        <p className="text-[12px] font-medium text-blue-500 italic">{items.promoteTitle}</p>
                    </div>

                    <div className="block text-[12px] font-medium leading-normal italic tracking-wide text-black opacity-40">
                        Sản phẩm giao chậm từ 1-2 ngày
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductCard
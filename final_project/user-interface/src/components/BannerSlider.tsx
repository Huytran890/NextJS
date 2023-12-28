import Image from "next/image";

type TBannerSlider = {
    image: string;
}

const BannerSlider = ({ image }: TBannerSlider) => {
    return (
        <Image src={image} alt="Banner Image" width={500} height={500} className='w-full h-full object-cover' />
    );
}

export default BannerSlider;
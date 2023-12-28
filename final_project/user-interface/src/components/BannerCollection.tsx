import Image from 'next/image';

type TBannerCollection = {
    items: {
        image: string;
    }
}

const BannerCollection = ({ items }: TBannerCollection) => {
    return (
        <div className='rounded-md overflow-hidden hover:brightness-75 transition-all ease-linear duration-300 cursor-pointer'>
            <Image src={items.image} alt='Banner Collection' width={500} height={500} className='w-full h-full object-cover' />
        </div>
    );
}

export default BannerCollection;
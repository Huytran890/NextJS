import Image, { StaticImageData } from 'next/image';
import ButtonHover from './ButtonHover';
import { cn } from '@/utils/libs';

type TBannerPrimary = {
    title: string;
    subTitle?: string;
    description?: string;
    highlightDes?: string;
    image: StaticImageData;
    decorImages?: StaticImageData;
}

const BannerPrimary = ({ title, subTitle, description, highlightDes, image, decorImages }: TBannerPrimary) => {
    return (
        <div className='relative w-full h-full rounded-sm overflow-hidden'>
            <Image src={image} alt='Banner Primary' className='h-full w-full object-cover pointer-events-none' width={500} height={500} />
            <div className='absolute left-[5%] bottom-[15%] h-fit max-w-[800px] flex flex-col justify-end pl-8 gap-y-4'>
                {decorImages
                    ? <Image src={decorImages} alt='decor image' width={500} height={500} className='h-[100px] object-cover' />
                    : <></>
                }
                <p className='text-sm leading-tight text-gray-400'>
                    {subTitle}
                </p>
                <h3 className={`text-[60px] leading-tight font-semibold uppercase break-words whitespace-pre-line ${decorImages || subTitle ? 'text-white' : ''}`}>{title}</h3>
                {description || highlightDes
                    ? <div className='text-lg font-medium leading-tight tracking-wide space-y-1'>
                        <p>{description}</p>
                        <p className='text-blue-500'>{highlightDes}</p>
                    </div>
                    : <></>
                }
                <div>
                    <ButtonHover label='khám phá ngay' />
                </div>
            </div>
        </div>
    );
}

export default BannerPrimary;
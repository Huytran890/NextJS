"use client"

type TBadgeCart = {
    cartNumber: number;
}

const BadgeCart = ({ cartNumber }: TBadgeCart) => {
    return (
        <span className='absolute top-0 -right-[10%] flex items-center justify-center bg-blue-500 text-white w-3 h-3 rounded-[50%] text-[8px]'>
            {cartNumber}
        </span>
    );
}

export default BadgeCart;
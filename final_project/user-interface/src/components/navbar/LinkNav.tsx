"use client"

import { SelectedPage } from '@/utils/type';
import Link from 'next/link'

type TLinkNav = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const LinkNav = ({ page, selectedPage, setSelectedPage }: TLinkNav) => {
    const transition = "transition-all ease-linear duration-[350]";
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <Link
            className={`${selectedPage === lowerCasePage ? "text-blue-500" : ""}
        capitalize hover:text-blue-500 ${transition}`}
            href={`${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </Link>
    );
};

export default LinkNav;
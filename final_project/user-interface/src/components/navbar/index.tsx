"use client"

import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/utils/type";
import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image'
import LinkNav from "./LinkNav";
import BadgeCart from "./BadgeCart";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { cn } from "@/utils/libs";
import { logo } from "@/utils/Images";
import { Menu, ShoppingCart, UserRound, X } from "lucide-react";
import SearchBox from "../SearchBox";
import Container from "../Container";

const Navbar = () => {
    const flexBetween = "flex items-center justify-between";
    const transition = "transition-all ease-linear duration-[350]";
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarBackground = isTopOfPage ? "shadow-sm" : "shadow-lg";
    
    return (
        <nav className="w-full h-[115px]">
            <div
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 bg-[#212121] ${transition}`}
            >
                <Container>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <Link href={"/"} className={`hover:opacity-60 ${transition}`}>
                            <Image alt="logo" src={logo} />
                        </Link>

                        {/* RIGHT SIDE */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full gap-x-5`}>
                                <div className={`${flexBetween} text-white gap-8 text-base`}>
                                    <LinkNav
                                        page="home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <LinkNav
                                        page="product"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <LinkNav
                                        page="sale"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <LinkNav
                                        page="care&share"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <SearchBox />
                                <div className={`${flexBetween} gap-8`}>
                                    <Link href={"/user"} className={`text-white hover:text-blue-500 ${transition}`} >
                                        <UserRound size={28} />
                                    </Link>
                                    <Link href={"/cart"} className={`relative text-white hover:text-blue-500 ${transition}`} >
                                        <ShoppingCart size={28} />
                                        <BadgeCart cartNumber={2}/>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <PrimaryButton
                                className="rounded-full p-2"
                                onclick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Menu className="h-6 w-6 text-white" />
                            </PrimaryButton>
                        )}
                    </div>
                </Container>
            </div>

            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className={cn(`absolute right-0 bottom-0 z-40 h-full w-[300px] bg-slate-200 shadow-xl ${transition})`)}
                >
                    <div>
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <SecondaryButton
                                className="!py-2 !px-3 group"
                                onclick={() => setIsMenuToggled(!isMenuToggled)}>
                                <X className="h-6 w-6 text-gray-400 group-hover:text-blue-500 transition-all ease-linear duration-500" />
                            </SecondaryButton>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                            <LinkNav
                                page="home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <LinkNav
                                page="product"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <LinkNav
                                page="sale"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <LinkNav
                                page="care&share"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
"use client"

import { Search } from "lucide-react";

const SearchBox = () => {
    const transition = "transition-all ease-linear duration-[350]";
    return (
        <form className="flex-1 max-w-[240px]">
            <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search size={16} className="w-4 h-4 text-gray-500" />
                </div>
                <input type="search" id="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none" placeholder="Search" />
                <button type="submit" className={`absolute text-white end-2.5 bottom-1/2 translate-y-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 ${transition}`}>Search</button>
            </div>
        </form>

    );
}

export default SearchBox;
import { MoveRight } from "lucide-react";

const ButtonHover = ({ label }: { label: string }) => {
    return (
        <a href="" className="relative inline-flex items-center pl-8 pr-10 py-3 overflow-hidden text-lg font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:text-white group hover:bg-gray-50 transition-all ease-linear duration-200">
            <span className="absolute left-0 block w-full h-0 transition-all bg-blue-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-300 ease"></span>
            <span className="absolute -right-[3%] flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <MoveRight className="w-5 h-5" />
            </span>
            <span className="relative uppercase">{label}</span>
        </a>
    );
}

export default ButtonHover;
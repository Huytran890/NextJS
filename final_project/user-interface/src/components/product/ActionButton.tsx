"use client"

type ActionButtonProps = {
    icon: JSX.Element;
    className?: string;
    onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, className, onClick }) => {

    return (
        <button onClick={onClick} className=' w-8 h-8 flex items-center justify-center bg-white rounded-[100%] right-1 hover:bg-slate-200 transition-all ease-linear duration-300 cursor-pointer'>
            {icon}
        </button>
    )
}

export default ActionButton
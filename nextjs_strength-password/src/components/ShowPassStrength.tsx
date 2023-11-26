import { cn } from "@nextui-org/react";

type TShowPassStrength = {
    strength: 0 | 1 | 2 | 3;
}

const ShowPassStrength = ({ strength }: TShowPassStrength) => {
    return (
        <div className="flex gap-2">
            {Array.from({ length: strength + 1 }).map((i, index) => (
                <div key={index} className={cn("h-2 w-32 rounded-md", {
                    "bg-red-500": strength === 0,
                    "bg-orange-500": strength === 1,
                    "bg-yellow-500": strength === 2,
                    "bg-green-500 grow": strength === 3,
                })}></div>
            ))}
        </div>
    );
}

export default ShowPassStrength;
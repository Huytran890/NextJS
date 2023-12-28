"use client"

type BadgeProps = {
    title: string;
}

const BadgeProduct: React.FC<BadgeProps> = ({ title }) => {
    let colorCss: string = '';

    switch (title.toLowerCase()) {
        case 'new':
            colorCss += 'bg-blue-500'
            break;
        case 'sale':
            colorCss += 'bg-red-500'
            break;
        case 'usual':
            colorCss += 'bg-green-500'
            break;
        default:
            break;
    }
    return (
        <div className={`text-center capitalize rounded-md py-1 px-2 text-white text-sm font-medium ${colorCss}`}>
            {title}
        </ div>
    )
}

export default BadgeProduct
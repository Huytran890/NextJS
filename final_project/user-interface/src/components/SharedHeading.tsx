
type TSharedHeading = {
    title: string;
}

const SharedHeading = ({title}: TSharedHeading) => {
    return (
        <h3 className="text-3xl text-[#231f20] uppercase leading-normal font-semibold">{title}</h3>
    );
}

export default SharedHeading;
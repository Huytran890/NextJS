import Navbar from "@/components/Navbar";
import prismaDb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface DashboardProps {
    children: React.ReactNode,
    params: { storeId: string }
}

const DashboardLayout: React.FC<DashboardProps> = async ({ children, params }) => {
    const { userId } = auth();
    if (!userId) {
        redirect("/sign-in");
    }

    const store = await prismaDb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    })
    if (!store) {
        redirect("/");
    }

    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default DashboardLayout;
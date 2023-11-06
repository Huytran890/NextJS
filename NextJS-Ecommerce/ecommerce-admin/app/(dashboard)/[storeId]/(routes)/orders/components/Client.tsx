"use client";

import { DataTable } from "@/components/DataTable";
import { Heading } from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, columns } from "./OrderColumn";


interface OrderClientProps {
    data: OrderColumn[];
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
}) => {
    return (
        <>
            <Heading title={`Orders (${data.length})`} description="Manage orders for your store" />
            <Separator />
            <DataTable searchKey="products" columns={columns} data={data} />
        </>
    );
};
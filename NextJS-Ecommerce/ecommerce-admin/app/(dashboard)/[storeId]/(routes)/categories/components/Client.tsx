"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CategoryColumn, columns } from "./CategoryColumn";
import { Heading } from "@/components/Heading";
import { DataTable } from "@/components/DataTable";
import { ApiList } from "@/components/ApiList";


interface CategoriesClientProps {
    data: CategoryColumn[];
}

export const CategoriesClient: React.FC<CategoriesClientProps> = ({
    data
}) => {
    const params = useParams();
    const router = useRouter();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Categories (${data.length})`} description="Manage categories for your store" />
                <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            <DataTable searchKey="name" columns={columns} data={data} />
            <Heading title="API" description="API Calls for Categories" />
            <Separator />
            <ApiList entityName="categories" entityIdName="categoryId" />
        </>
    );
};
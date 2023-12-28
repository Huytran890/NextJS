import { ReactNode } from "react";

export interface CustomComponentPros {
	label?: string;
	children?: ReactNode;
	className?: string;
	handle?: () => void;
};

export enum SelectedPage {
	Home = 'home',
	Product = 'product',
	Sale = 'sale',
	CustomerCare = 'care&share',
}

export type TImage = {
	image: string;
};

export type TBannerImage = {
	productName: string;
	title: string;
	image: string;
};

export type TProductColor = {
	id: string;
	color: string;
	descriptionColor: string;
};
export type TProductSize = {
	id: string;
	size: string;
};

export type TProduct = {
	id: string;
	image: string;
	imageSub?: string;
	colors: TProductColor[];
	sizes: TProductSize[];
	status?: string;
	nameProduct: string;
	price: string;
	initialPrice?: string;
	percentSale?: string;
	promoteTitle?: string;
	star?: number;
	comments?: number;
	productTag?: string;
	imageSale?: string;
};

export type TProductCart = {
	id: string;
	nameProduct: string;
	image: string;
	imageSub?: string;
	color: string;
	size: string;
	status?: string;
	price: string;
	initialPrice?: string;
	percentSale?: string;
	promoteTitle?: string;
	star?: number;
	comments?: number;
	quantity: number;
};
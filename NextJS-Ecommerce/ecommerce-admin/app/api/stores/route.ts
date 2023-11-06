import prismaDb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { userId } = auth();
		if (!userId) {
			return new NextResponse('Unauthorized!', { status: 401 });
		}

		const { name } = body;
		if (!name) {
			return new NextResponse('Name is required!', { status: 400 });
		}

		const store = await prismaDb.store.create({
			data: {
				name,
				userId,
			},
		});

		return NextResponse.json(store);
	} catch (error) {
		console.log('««««« store-POST »»»»»', error);
		return new NextResponse('Internal error', { status: 500 });
	}
}

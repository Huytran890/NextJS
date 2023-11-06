import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { nanoid } from 'nanoid';

export const middleware = (req: NextRequest) => {
	const userId = req.cookies.get('userId');

	const res = NextResponse.next();

	if (!userId) {
		res.cookies.set('userId', nanoid());
	}
	console.log(res.cookies.get('userId'));
	return res;
};

export const config = {
	/*
	 * Match all request paths except for the ones starting with:
	 * - api (API routes)
	 * - _next/static (static files)
	 * - _next/image (image optimization files)
	 * - favicon.ico (favicon files)
	 */
	matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};

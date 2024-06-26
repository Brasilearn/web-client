import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const token = request.cookies.get('authToken');

    // If the token is not present, redirect to the login page
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
	}

	// If the token is present, continue to the next middleware
	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/profile', '/profile/:path*', '/:topic/:level/results'],
};

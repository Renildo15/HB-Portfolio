import { NextRequest, NextResponse } from "next/server";

export default function proxy(req:NextRequest) {
    const auth = req.cookies.get('auth');

    if (!auth && req.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    if (req.nextUrl.pathname === '/login') {
      const key = req.nextUrl.searchParams.get('key');
      if (key !== process.env.ADMIN_SECRET) {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }

    if (auth && req.nextUrl.pathname === '/login') {
      return NextResponse.redirect(new URL('/admin', req.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
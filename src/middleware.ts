import { getToken } from "next-auth/jwt";
import {withAuth} from 'next-auth/middleware';
import { NextResponse } from "next/server";

export default withAuth(async function middleware(req) {
    const pathname = req.nextUrl.pathname;
    const isAuth  = await getToken({req});
    const sensitiveRoutes = ['/dashboard'];
    const isAccessingSensitiveRoute = sensitiveRoutes.some((route) => pathname.startsWith(route));
    if(isAccessingSensitiveRoute) {
        if(!isAuth) {
            return NextResponse.redirect(new URL('/login',req.url));
        }
        if(isAuth.email !== process.env.ADMIN_EMAIL) {
            return NextResponse.redirect(new URL('/', req.url));
        }
    }
    return NextResponse.next();
},
{
    callbacks: {
        async authorized() {
            return true;
        }
    }
});

export const config = {
    matcher: ['/login','/dashboard']
}
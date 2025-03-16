import { NextRequest, NextResponse } from "next/server";
import { ROUTE_AUTH } from "./lib/constants/route";

const publicRoutes = [ROUTE_AUTH.SIGNIN, ROUTE_AUTH.SIGNUP];

export async function middleware(req: NextRequest) {
    // Handle both secure and non-secure session token cookies
    const sessionToken =
        req.cookies.get("next-auth.session-token") ||
        req.cookies.get("__Secure-next-auth.session-token");

    // Redirect unauthorized users if they are not accessing public routes
    if (sessionToken && !publicRoutes.includes(req.nextUrl.pathname)) {
        return NextResponse.redirect(new URL(ROUTE_AUTH.SIGNIN, req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next(?:/static|/image)|favicon\\.ico|.*\\.(?:png|jpg|jpeg|svg|webp|gif)).*)",
    ],
};


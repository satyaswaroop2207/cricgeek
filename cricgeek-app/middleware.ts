import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.ABOUT_ONLY_DEPLOYMENT !== "true") {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;
  const isAboutPage = pathname === "/about";
  const isNextAsset = pathname.startsWith("/_next/");
  const isPublicAsset = pathname === "/favicon.ico" || pathname.includes(".");

  if (isAboutPage || isNextAsset || isPublicAsset) {
    return NextResponse.next();
  }

  const aboutUrl = request.nextUrl.clone();
  aboutUrl.pathname = "/about";
  aboutUrl.search = "";
  return NextResponse.redirect(aboutUrl);
}

export const config = {
  matcher: "/:path*",
};
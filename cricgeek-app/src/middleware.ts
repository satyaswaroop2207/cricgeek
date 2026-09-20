import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.ABOUT_ONLY_DEPLOYMENT === "false") {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;
  const isAboutPage = pathname === "/about";
  const isRootPage = pathname === "/";
  const isNextAsset = pathname.startsWith("/_next/");
  const isPublicAsset = pathname === "/favicon.ico" || /\.[^/]+$/.test(pathname);

  if (isAboutPage || isNextAsset || isPublicAsset) {
    return NextResponse.next();
  }

  if (isRootPage) {
    const aboutUrl = request.nextUrl.clone();
    aboutUrl.pathname = "/about";
    return NextResponse.rewrite(aboutUrl);
  }

  const rootUrl = request.nextUrl.clone();
  rootUrl.pathname = "/";
  rootUrl.search = "";
  return NextResponse.redirect(rootUrl);
}

export const config = {
  matcher: "/:path*",
};
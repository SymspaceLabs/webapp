import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";
import { parseJwt } from "../src/lib";

export function middleware(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get("Cookie") || "");
  const tokenFromCookie = cookies.token;
  const tokenFromOauth = req.cookies.get("token");
  const tokenFromQuery = req.nextUrl.searchParams.get("token");

  let tokenData;

  if (tokenFromCookie) {
    try {
      tokenData = parseJwt(tokenFromCookie);
      console.log("Token data from cookie:", tokenData);
    } catch (error) {
      console.error("Error parsing token:", error);
    }
  }

  if (tokenFromOauth) {
    try {
      tokenData = parseJwt(tokenFromOauth.value);
      console.log("Token data from OAuth:", tokenData);
    } catch (error) {
      console.error("Error parsing OAuth token:", error);
    }
  }

  if (tokenFromQuery) {
    try {
      tokenData = parseJwt(tokenFromQuery);
      console.log("Token data from query parameter:", tokenData);
    } catch (error) {
      console.error("Error parsing query token:", error);
    }
  }

  // Define public paths
  const publicPaths = ["/", "/login", "/signup", "/public-page"]; // Add your public paths here
  const isPublicPath = publicPaths.includes(req.nextUrl.pathname);

  // If token is found in query parameters, set it as a cookie and redirect to root
  if (tokenFromQuery) {
    const response = NextResponse.redirect(new URL("/", req.url));
    response.cookies.set("token", tokenFromQuery, {
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    console.log("Setting token from query parameter in cookies and redirecting to index...");
    return response;
  }

  // If no token is present and the path is not public, redirect to the login page
  // if (!tokenFromCookie && !tokenFromOauth && !isPublicPath) {
  //   console.log("Redirecting to login because no token is found...");
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  // Proceed with the request if no redirection is needed
  console.log("Proceeding to next response...");
  return NextResponse.next();
}

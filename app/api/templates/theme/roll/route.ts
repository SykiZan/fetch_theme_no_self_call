import { NextResponse } from "next/server";
import { templates } from "@/lib/templates.data";

const COOKIE_NAME = "theme";

export async function GET(req: Request) {
  const storeUrl = new URL("/store", req.url);

  if (!templates.length) return NextResponse.redirect(storeUrl);

  const picked = templates[Math.floor(Math.random() * templates.length)];

  const response = NextResponse.redirect(storeUrl);
  response.cookies.set(COOKIE_NAME, picked.key, {
    path: "/",
    sameSite: "lax",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
  });

  response.headers.set("Cache-Control", "no-store");
  return response;
}

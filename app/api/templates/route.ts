import { NextResponse } from "next/server";
import { templates } from "@/lib/templates.data";

export async function GET() {
  return NextResponse.json(templates);
}

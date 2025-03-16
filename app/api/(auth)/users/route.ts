import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse("This is my first api.");
}

import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http:localhost:3002/api/posts");
  const data = await res.json();

  const posts = data.slice(0, 5);

  return NextResponse.json({ data: posts });
}

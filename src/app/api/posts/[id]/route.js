import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const postId = params.id;
  const res = await fetch(`http:localhost:3002/api/posts/${postId}`);
  const data = await res.json();

  return NextResponse.json({ data });
}

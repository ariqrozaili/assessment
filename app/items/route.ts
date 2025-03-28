import { NextResponse } from "next/server";

let items = []; // In-memory storage

// ✅ GET: Retrieve all items
export async function GET() {
  return NextResponse.json(items);
}

// ✅ POST: Add a new item
export async function POST(req: Request) {
  const { name } = await req.json();
  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  const newItem = { id: items.length + 1, name };
  items.push(newItem);

  return NextResponse.json(newItem, { status: 201 });
}

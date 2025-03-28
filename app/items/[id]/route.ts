import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const item = items.find((i) => i.id === parseInt(params.id));
  if (!item) return NextResponse.json({ error: "Item not found" }, { status: 404 });

  return NextResponse.json(item);
}

// ✅ PUT: Update an item by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { name } = await req.json();
  const itemIndex = items.findIndex((i) => i.id === parseInt(params.id));

  if (itemIndex === -1) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  items[itemIndex].name = name || items[itemIndex].name;

  return NextResponse.json(items[itemIndex]);
}

// ✅ DELETE: Remove an item by ID
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const itemIndex = items.findIndex((i) => i.id === parseInt(params.id));

  if (itemIndex === -1) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  items.splice(itemIndex, 1);

  return NextResponse.json({ message: "Item deleted" });
}

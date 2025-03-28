"use client";
import { useState } from "react";

export default function ItemsList() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
  ]);

  const [search, setSearch] = useState("");

  const deleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Items List</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mt-4"
      />
      <ul className="mt-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id} className="p-2 border-b flex justify-between">
              {item.name}
              <button
                onClick={() => deleteItem(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500 mt-2">No items found.</p>
        )}
      </ul>
    </div>
  );
}

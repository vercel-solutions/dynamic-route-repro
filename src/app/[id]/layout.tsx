"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [counter, setCounter] = useState(0);
  const params = useParams();
  const id = params.id;

  return (
    <section>
      <nav className="flex gap-6">
        <Link href="/">/</Link>
        <Link href={`/${id}`}>/{id}</Link>
        <Link href={`/${id}/a`}>/{id}/a</Link>
        <Link href={`/${id}/b`}>/{id}/b</Link>
      </nav>
      <div className="flex flex-row items-center gap-4">
        <button
          className="bg-slate-900 text-sm text-white px-6 py-2 rounded-md"
          onClick={() => setCounter((c) => c + 1)}
        >
          +
        </button>{" "}
        <p>{counter}</p>
        <button
          className="bg-slate-900 text-sm text-white px-6 py-2 rounded-md"
          onClick={() => setCounter((c) => c - 1)}
        >
          -
        </button>
      </div>
      <main className="m-4">{children}</main>
    </section>
  );
}

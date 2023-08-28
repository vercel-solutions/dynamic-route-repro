import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        {new Array(10).fill(0).map((_, i) => (
          <li key={i}>
            <Link href={"/" + i}>/{i}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

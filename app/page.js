import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <p>
        <Link href="/meals">
          Here you'll find information about the meals about the meals
        </Link>
      </p>
      <p>
        <Link href="/meals/share">Share your meals here</Link>
      </p>
      <p>
        <Link href="/community">Learn more about our community</Link>
      </p>
    </main>
  );
}

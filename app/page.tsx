import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-5 w-screen h-screen">
      <div className="flex gap-5">
        <Link href={"/light"} className="bg-blue-500 p-5 text-2xl">Light</Link>
        <Link href={"/dark"} className="bg-blue-500 p-5 text-2xl">Dark</Link>
      </div>
    </div>
  );
}

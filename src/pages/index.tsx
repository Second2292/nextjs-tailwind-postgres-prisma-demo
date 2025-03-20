import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold text-green-600">
          Welcome to Next.js with Tailwind!
        </h1>
        <p className="text-gray-600 mt-2">This is your first page made by Keo khn lhor.</p>
        <Link
          href="/about"
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Go to About Page
        </Link>
      </div>
    </MainLayout>
  );
}

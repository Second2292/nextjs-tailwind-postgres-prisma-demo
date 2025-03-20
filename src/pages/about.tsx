import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

export default function About() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold text-blue-600">About Page</h1>
        <p className="text-gray-600 mt-2">
          This is the about page of our Next.js app.
        </p>
        <Link
          href="/"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go Home
        </Link>
      </div>
    </MainLayout>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <div className="px-3 shadow-sm flex items-center justify-between w-full bg-gray-200 text-gray-900">
      <div className="py-4 px-8 bg-[#b5ca8d] font-bold">SAMPLE</div>
      <div className="sm:flex">
        <Link
          className="mx-1 py-4 px-8 bg-[#2a4849] text-gray-100 hover:bg-[#222e50]"
          href="/"
        >
          Home
        </Link>
        <Link
          className="py-4 px-8 bg-[#2a4849] text-gray-100 hover:bg-[#222e50]"
          href="/posts"
        >
          Posts
        </Link>
      </div>
    </div>
  );
}

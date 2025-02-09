import Link from "next/link";
import { Logo } from "./logo";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 font-bold">
          <span className="text-xl">QuickPic</span>
          <span className="text-xl text-gray-400 mx-1">/</span>
          <span className="text-xl font-normal">by</span>
          <Logo className="w-8 h-6 mt-[5px]" />
        </Link>
        <nav>
          <Link
            href="/convert"
            className="text-sm hover:text-gray-600 transition-colors"
          >
            Convert
          </Link>
        </nav>
      </div>
    </header>
  );
}

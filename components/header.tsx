import Link from "next/link";
import { Logo } from "./logo";
import { PicDashLogo } from "./picdash";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 font-bold">
          <PicDashLogo className="h-8" />
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

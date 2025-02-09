import { Logo } from "./logo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo className="w-6 h-6" />
          <span className="text-sm font-semibold">picDash</span>
        </div>
        <p className="text-sm text-gray-500">
          &copy; 2025 picDash by JRS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

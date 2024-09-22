import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="Flowrise logo" width={32} height={32} />
        <span className="text-2xl font-semibold text-primary">flowrise</span>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="text-gray-600 hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="/features" className="text-gray-600 hover:text-primary">
              Features
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-gray-600 hover:text-primary">
              Pricing
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

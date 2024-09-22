import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; 2023 Flowrise. All rights reserved.</p>
        <div className="mt-4">
          <Link href="/privacy" className="text-primary hover:underline mx-2">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-primary hover:underline mx-2">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-primary hover:underline mx-2">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}

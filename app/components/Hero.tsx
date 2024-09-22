import Link from "next/link";

export default function Hero() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Productivity that flows
        <br />
        with your life.
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Unleash your potential by harmonizing
        <br />
        your daily tasks and habits with your
        <br />
        unique energy rhythms.
      </p>
      <Link
        href="/signup"
        className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition duration-300"
      >
        Try for free
      </Link>
    </div>
  );
}

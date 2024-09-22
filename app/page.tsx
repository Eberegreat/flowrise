import Hero from "./components/Hero";
import AppPreview from "./components/AppPreview";
import Features from "./components/Features";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <Hero />
      <AppPreview />
      <Features />
      <Testimonial />
    </main>
  );
}

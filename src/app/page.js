import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Testimonials />

      <Footer />
    </div>
  );
}

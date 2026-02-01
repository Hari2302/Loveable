import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/Background.jpg')" }}
    >
      {/* Dark shadow overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 flex flex-col justify-center">
          <Hero />
          <AboutMe />
        </main>

        <Footer />
      </div>
    </div>
  );
}

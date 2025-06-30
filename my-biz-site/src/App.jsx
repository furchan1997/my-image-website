import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import MyOffers from "./pages/MyOffers";
import SignIn from "./pages/admin/signin";
import ClientOffers from "./pages/admin/ClientOffers";
import CreateOffer from "./pages/CreateOffer";

function PublicSite() {
  return (
    <div className="app min-vh-100 d-flex flex-column rtl">
      <header>
        <Navbar />
      </header>
      <main
        style={{ marginTop: "90px", marginBottom: "130px" }}
        className="d-flex flex-column justify-content-center align-items-center text-center p-4 mx-auto"
      >
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <MyOffers />
        <CreateOffer />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.userway.org/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // נקיון הסקריפט כשהקומפוננטה מתפרקת
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Routes>
      {/* אתר ציבורי */}
      <Route path="/" element={<PublicSite />} />
      {/* אזור מנהל */}
      <Route path="/admin/sign-in" element={<SignIn />} />
      <Route path="/admin/offers" element={<ClientOffers />} />
    </Routes>
  );
}

export default App;

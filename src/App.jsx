import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import News from "./sections/News";
import SchoolProfile from "./sections/SchoolProfile";
import Gallery from "./sections/Gallery";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <News />
        <SchoolProfile />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;

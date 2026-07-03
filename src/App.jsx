import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import News from "./sections/News";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <News />
      </main>
    </>
  );
}

export default App;

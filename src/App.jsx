import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import News from "./sections/News";
import SchoolProfile from "./sections/SchoolProfile";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <News />
        <SchoolProfile />
      </main>
    </>
  );
}

export default App;

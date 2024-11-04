import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero/Hero";
import Service from "./components/Services/Service";

function App() {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Navbar />
        <Hero />
      </UpdateFollower>
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "black",
          zIndex: 999,
          followSpeed: 1.5,
        }}
      >
        <Service />\
      </UpdateFollower>
    </main>
  );
}

export default App;

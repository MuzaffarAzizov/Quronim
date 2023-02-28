import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Quron } from "./pages/Quron";
import { Namoz } from "./pages/Namoz";
import { Detail } from "./pages/Detail";
import { Layout } from "./components/Layout";
import { AudioPlayerProvider } from "./utils/AudioContext";

function App() {
  return (
    <div className="App">
      <AudioPlayerProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quron" element={<Quron />} />
            <Route path="/namoz" element={<Namoz />} />
            <Route path="/quron/:number" element={<Detail />} />
          </Routes>
        </Layout>
      </AudioPlayerProvider>
    </div>
  );
}

export default App;

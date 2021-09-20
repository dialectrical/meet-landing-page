import { Hero } from "./components/Hero";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

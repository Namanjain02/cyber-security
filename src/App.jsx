import "./App.css";
import About from "./components/About";
import Address from "./components/Address.jsx";
import Awards from "./components/Awards";
import Banner from "./components/Banner";
import Features from "./components/Features";
import Feedback from "./components/Feedback.jsx";
import FigSection from "./components/FigSection";
import Footer from "./components/Footer.jsx";
import GoogleMap from "./components/GoogleMap";
import History from "./components/History";

import Navbar from "./components/Navbar";
import OurTeam from "./components/OurTeam.jsx";
import Pricing from "./components/Pricing";
import Progress from "./components/Progress";
import Testimonials from "./components/Testimonials.jsx";
import Video from "./components/Video";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <About />
      <FigSection />
      <Progress />
      <Pricing />
      <History />
      <Video />
      <OurTeam />
      <Awards />
      <Testimonials />
      <Address />
      <GoogleMap />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;

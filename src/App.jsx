//change current directory to website_test
//run with npm run dev

import ButtonGradient from "./assets/svg/ButtonGradient"
import Benefits from "./components/Benefits";
import Button from "./components/Button";
import Colaboration from "./components/Colaboration";
import Header from "./components/Header";
import Hero from "./components/hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>    
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Colaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
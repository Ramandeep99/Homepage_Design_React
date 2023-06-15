import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Section1 from './components/Section1/Section1';
import Section_Overview from './components/SectionOverview/Overview';
import Amenities from './components/Amenities/Amenities';
import PricingDetails from './components/PricingDetails/PricingDetails';
import SitePlans from './components/SiteFloorPlans/SitePlans';
import Location from './components/Location/Location';
import Video from './components/Video/Video';
import AboutSection from './components/About/About';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="App">
      <Navbar setSidebar={setSidebar}/>
      <Slider sidebar={sidebar}/>
      <Section1/>
      <Section_Overview/>
      <Amenities />
      <PricingDetails/>
      <SitePlans/>
      <Location/>
      <Video/>
      <AboutSection/>
      <Form/>
      <Footer/>

    </div>
  );
}

export default App;

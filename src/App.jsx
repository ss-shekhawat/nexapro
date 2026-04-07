
// Import all our components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">

      
      <Navbar />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;


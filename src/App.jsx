// 📚 App.jsx - THE MAIN COMPONENT
// This is the root component that brings everything together

// Import all our components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// 📚 COMPONENT ARCHITECTURE PATTERN
// INTERVIEW TIP: "I organized my app with a clear component hierarchy"
// 
// App (Parent)
//   ├── Navbar
//   ├── Hero
//   ├── About
//   ├── Services
//   ├── WhyChooseUs
//   ├── Contact
//   └── Footer

function App() {
  // 📚 NO STATE NEEDED HERE
  // Why? This is just a "container component" that organizes other components
  // State lives in the components that need it (Navbar, Contact)
  // 
  // INTERVIEW CONCEPT: "Smart vs Presentational Components"
  // - Smart (Stateful): Have logic and state (Navbar, Contact)
  // - Presentational: Just display data (Hero, About, Footer)
  
  return (
    <div className="App">
      {/* 📚 COMPONENT COMPOSITION
          We're building our app by composing smaller components
          Each component is self-contained and reusable */}
      
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

/*
🎯 KEY ARCHITECTURE CONCEPTS:

1. ✅ Single Responsibility Principle
   - Each component does ONE thing well
   - Navbar handles navigation
   - Contact handles forms
   - Hero displays hero content

2. ✅ Component Composition
   - Build complex UIs from simple pieces
   - Easy to understand and maintain

3. ✅ Separation of Concerns
   - Data (content.js)
   - Components (UI)
   - Styles (Tailwind classes)

4. ✅ Scalability
   - Easy to add new sections
   - Easy to reorder sections
   - Easy to test individual components

INTERVIEW TALKING POINTS:
"I structured the app with a clear component hierarchy where each
component has a single responsibility. The App component acts as
a container that composes all sections together, making it easy
to understand the overall structure at a glance."

"I separated stateful logic (Navbar scroll, Contact form) from
presentational components (Hero, About) which makes the code
more maintainable and easier to test."
*/

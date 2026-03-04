// 📚 Services Component - Demonstrates component composition and mapping

import { servicesData } from "../../data/content";
import {
  FaServer,
  FaCloud,
  FaCode,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

// 📚 COMPONENT COMPOSITION PATTERN
// Instead of one huge component, we break it into smaller pieces
// This is a "Service Card" sub-component (child component)

const ServiceCard = ({ service }) => {
  // 📚 PROPS DESTRUCTURING: { service } extracts service from props object
  // Instead of: props.service, we can directly use: service

  // 📚 ICON MAPPING: Match string names to actual icon components
  // INTERVIEW TIP: "I used an object to map dynamic data to React components"
  const iconMap = {
    FaServer: FaServer,
    FaCloud: FaCloud,
    FaCode: FaCode,
    FaHeadset: FaHeadset,
  };

  const IconComponent = iconMap[service.icon] || FaCode;

  return (
    <div className="card group">
      {/* group class allows child elements to respond to parent hover */}

      {/* Icon Container */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary transition-colors duration-300">
          <IconComponent className="text-primary text-3xl group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-dark">{service.title}</h3>
      </div>

      {/* Services List */}
      <ul className="space-y-3">
        {service.services.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <FaCheckCircle className="text-primary flex-shrink-0 mt-1" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 📚 MAIN SERVICES COMPONENT (Parent)
const Services = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-subtitle">What We Do</p>
          <h2 className="section-title">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Comprehensive enterprise IT solutions spanning legacy systems,
            modernization, and cutting-edge technologies.
          </p>
        </div>

        {/* Services Grid */}
        {/* 📚 RESPONSIVE GRID: 1 column on mobile, 2 on tablet, 2 on desktop */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 📚 COMPONENT COMPOSITION: We render ServiceCard for each service */}
          {/* INTERVIEW QUESTION: "How do you pass data to child components?" */}
          {/* ANSWER: "Through props - we pass the service object to ServiceCard" */}

          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service} // 📚 Passing data via props
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to transform your enterprise systems?
          </p>
          <a href="#contact" className="btn-primary">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

/*
🎯 ADVANCED CONCEPTS DEMONSTRATED:

1. ✅ Component Composition (ServiceCard inside Services)
2. ✅ Props passing and destructuring
3. ✅ Dynamic icon rendering
4. ✅ Nested arrays mapping (.map inside .map)
5. ✅ Group hover effects (Tailwind)
6. ✅ Reusable card pattern

INTERVIEW TALKING POINTS:
- "I broke down complex UI into smaller, reusable components"
- "Used props to pass data from parent to child"
- "Implemented dynamic icon rendering based on data"
- "Applied group hover for better UX"

COMMON INTERVIEW QUESTIONS THIS ANSWERS:
Q: "What is component composition?"
A: "Building complex UIs by combining smaller, reusable components"

Q: "How do you handle dynamic content?"
A: "I use .map() to iterate over data and create components dynamically"

Q: "What are the benefits of breaking components into smaller pieces?"
A: "Reusability, easier testing, better maintainability, clearer code"
*/

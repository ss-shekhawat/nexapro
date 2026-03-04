// 📚 Contact Component - DEMONSTRATES FORM HANDLING IN REACT
// This is one of the MOST IMPORTANT interview topics!

import { useState } from "react";
import { companyInfo, contactFormFields } from "../../data/content";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  // 📚 FORM STATE MANAGEMENT
  // INTERVIEW QUESTION: "How do you handle forms in React?"
  // ANSWER: "I use controlled components with useState"

  // State for form data - one object to hold all field values
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // 📚 HANDLING INPUT CHANGES (Controlled Components)
  // INTERVIEW CONCEPT: "Controlled Component" - React controls the input value
  // The input value is always driven by state

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure event target

    // Update form data for the specific field that changed
    setFormData((prevState) => ({
      ...prevState, // 📚 SPREAD OPERATOR: Keep all other fields
      [name]: value, // 📚 COMPUTED PROPERTY: Update only this field
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // 📚 FORM VALIDATION
  // INTERVIEW TIP: "I implement client-side validation for better UX"

  const validateForm = () => {
    const newErrors = {};

    // Check each required field
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    // Email validation with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation (basic)
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // 📚 FORM SUBMISSION
  // INTERVIEW QUESTION: "How do you prevent default form submission?"
  // ANSWER: "Use e.preventDefault() to handle submission with JavaScript"

  const handleSubmit = (e) => {
    e.preventDefault(); // 📚 Prevent page reload

    // Validate form
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      // If there are errors, set them and don't submit
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    setIsSubmitting(true);

    // In a real app, you'd send data to a backend API here
    console.log("Form submitted:", formData);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Let's transform your enterprise systems together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT SIDE - Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-dark mb-6">
                Let's Start a Conversation
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Email</p>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaPhone className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Phone</p>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                  <div>
                    <p className="font-semibold text-dark">Location</p>
                    <p className="text-gray-600">{companyInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-lg">
              <p className="text-lg leading-relaxed">
                "Partner with Nexapro Technologies and unlock the full potential
                of your legacy systems."
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Success Message */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {/* 📚 CONTROLLED FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name} // 📚 CONTROLLED: value from state
                  onChange={handleChange} // 📚 CONTROLLED: updates state
                  className={`input-field ${errors.name ? "border-red-500" : ""}`}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`input-field ${errors.company ? "border-red-500" : ""}`}
                  placeholder="Your Company"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${errors.email ? "border-red-500" : ""}`}
                  placeholder="your.email@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`input-field ${errors.phone ? "border-red-500" : ""}`}
                  placeholder="+91-XXXXXXXXXX"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Service Select */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`input-field ${errors.service ? "border-red-500" : ""}`}
                >
                  <option value="">Select a service</option>
                  <option value="legacy">Legacy Systems Services</option>
                  <option value="modernization">
                    Legacy Modernization & Integration
                  </option>
                  <option value="modern">Modern Technology Solutions</option>
                  <option value="consulting">Consulting & Support</option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`textarea-field ${errors.message ? "border-red-500" : ""}`}
                  placeholder="Tell us about your project..."
                  rows="4"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/*
🎯 CRITICAL FORM CONCEPTS COVERED:

1. ✅ Controlled Components (value + onChange)
2. ✅ Form state management with useState
3. ✅ Form validation (client-side)
4. ✅ Error handling and display
5. ✅ Event handling (onChange, onSubmit)
6. ✅ Preventing default behavior (e.preventDefault)
7. ✅ Computed property names ([name]: value)
8. ✅ Conditional rendering (errors, success message)
9. ✅ Async state updates (form submission)
10. ✅ Form reset after submission

INTERVIEW QUESTIONS THIS COMPONENT ANSWERS:

Q: "What are controlled components?"
A: "Components where React state is the single source of truth for form inputs.
    The input value is set by state, and onChange updates that state."

Q: "How do you validate forms in React?"
A: "I implement a validation function that checks each field and returns
    an errors object. I show errors conditionally and clear them on change."

Q: "What's the difference between controlled and uncontrolled components?"
A: "Controlled = state-driven, React controls the value
    Uncontrolled = DOM-driven, access value with refs"

Q: "How do you handle multiple form inputs efficiently?"
A: "Use one state object with computed property names in onChange:
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))"

THIS IS A MUST-KNOW FOR INTERVIEWS! 🔥
*/

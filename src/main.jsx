// 📚 main.jsx - THE ENTRY POINT
// This is where React gets injected into the DOM

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 📚 WHAT HAPPENS HERE?
// 1. ReactDOM.createRoot() finds the div with id="root" in index.html
// 2. .render() puts our React app inside that div
// 3. <React.StrictMode> helps catch bugs during development

// INTERVIEW TIP: "The virtual DOM is React's in-memory representation
// of the actual DOM. When state changes, React compares the virtual
// DOM with the real DOM and only updates what changed (reconciliation)"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/*
🎯 CONCEPTS:

1. ✅ Entry point of React app
2. ✅ React.StrictMode for development warnings
3. ✅ DOM manipulation (ReactDOM)

INTERVIEW QUESTION: "What is the Virtual DOM?"
ANSWER: "The Virtual DOM is a lightweight copy of the actual DOM.
React uses it to determine what needs to be updated in the real DOM
through a process called reconciliation, making updates very efficient."

INTERVIEW QUESTION: "What does React.StrictMode do?"
ANSWER: "It activates additional checks and warnings in development mode
to help identify potential problems like unsafe lifecycle methods,
legacy APIs, and unexpected side effects."
*/

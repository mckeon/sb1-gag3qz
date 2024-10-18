import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Code, Users, MessageSquare, Menu, X } from 'lucide-react';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Code className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-xl font-bold text-gray-800">CodeCraft Consultancy</span>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium">
                  Home
                </Link>
                <Link to="/services" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  Services
                </Link>
                <Link to="/contact" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  Contact
                </Link>
              </div>
              <div className="sm:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <Link to="/" className="text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/services" className="text-gray-500 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-gray-300 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>
                <Link to="/contact" className="text-gray-500 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 border-transparent hover:border-gray-300 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>

        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <footer className="bg-white shadow-md mt-8">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 CodeCraft Consultancy. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
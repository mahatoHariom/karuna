import React from "react";
import { Link } from "react-router-dom";
import { Code2, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Karuna Info Tech</span>
            </div>
            <p className="mt-4 text-gray-400">
              Transforming ideas into powerful software solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white">
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-400 hover:text-white"
              >
                About
              </Link>
              <Link
                to="/services"
                className="block text-gray-400 hover:text-white"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <span className="block text-gray-400">Custom Software</span>
              <span className="block text-gray-400">Web Development</span>
              <span className="block text-gray-400">Mobile Apps</span>
              <span className="block text-gray-400">Cloud Solutions</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61570450655481"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61570450655481"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61570450655481"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61570450655481"
                className="text-gray-400 hover:text-white"
                target="_blank"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Karuna IT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

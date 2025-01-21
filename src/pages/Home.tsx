import { Link } from "react-router-dom";
import { Laptop, Cloud, File as Mobile } from "lucide-react";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with 3D effect */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/50 to-blue-900/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
              Building Tomorrow's Software Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 slide-in stagger-1">
              We create innovative software solutions that drive business growth
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 slide-in stagger-2"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-lg transform rotate-45 animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-lg transform -rotate-12 animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>
      </section>

      {/* Services Section with 3D cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 slide-in">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-3d p-8 bg-white rounded-xl shadow-lg slide-in stagger-1">
              <Laptop className="h-12 w-12 text-blue-600 mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">
                Custom web applications built with modern technologies and best
                practices.
              </p>
            </div>
            <div className="card-3d p-8 bg-white rounded-xl shadow-lg slide-in stagger-2">
              <Mobile
                className="h-12 w-12 text-blue-600 mb-4 animate-float"
                style={{ animationDelay: "0.5s" }}
              />
              <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
              <p className="text-gray-600">
                Native and cross-platform mobile applications for iOS and
                Android.
              </p>
            </div>
            <div className="card-3d p-8 bg-white rounded-xl shadow-lg slide-in stagger-3">
              <Cloud
                className="h-12 w-12 text-blue-600 mb-4 animate-float"
                style={{ animationDelay: "1s" }}
              />
              <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-gray-600">
                Scalable cloud infrastructure and deployment solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with glassmorphism */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4 slide-in">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 slide-in stagger-1">
              Let's discuss how we can help you achieve your goals
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 slide-in stagger-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

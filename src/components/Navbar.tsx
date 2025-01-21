import { Link, useLocation } from "react-router-dom";
import { Code2 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-blue-600"
      : "text-gray-600 hover:text-blue-600";
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Karuna IT
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`${isActive(
                "/"
              )} transition-colors duration-200 font-medium`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${isActive(
                "/about"
              )} transition-colors duration-200 font-medium`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${isActive(
                "/services"
              )} transition-colors duration-200 font-medium`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`${isActive(
                "/contact"
              )} transition-colors duration-200 font-medium`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

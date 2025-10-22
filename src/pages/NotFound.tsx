import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto px-5">
        {/* Upper Section */}
        <div className="bg-indigo-50 rounded-lg p-8 text-center space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">
            Grow your Programming skills with Log2Base2
          </h2>
          <div className="flex justify-center items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className="text-indigo-600 font-bold">👥</span>
              <span className="text-gray-600">700K+ Learners</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-indigo-600 font-bold">🌐</span>
              <span className="text-gray-600">70+ Countries</span>
            </div>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition">
            Start Learning →
          </button>
        </div>

        {/* Footer Links Section */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Log2Base2</h3>
            <p className="text-gray-600 text-sm mt-2">
              © Log2Base2 Edutech Media Pvt Ltd
              <br /> All rights reserved
            </p>
            <div className="flex space-x-3 mt-4 text-gray-500">
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Products</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Originals
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Regionals
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Code Juniors{" "}
                  <span className="bg-red-500 text-white text-xs rounded px-2 py-0.5 ml-1">
                    KIDS
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partner+ Courses{" "}
                  <span className="bg-green-500 text-white text-xs rounded px-2 py-0.5 ml-1">
                    NEW
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Packages Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800">
              Original Packages
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Beginners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  C & Pointers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Python
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Structures & Algorithms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Interview Preparation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Frontend Development
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800">Links</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Student Group Purchase{" "}
                  <span className="bg-green-500 text-white text-xs rounded px-2 py-0.5 ml-1">
                    SAVE BIG
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Buy Individual Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Buy Packages
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  For Fresher Hiring
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  For Business
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

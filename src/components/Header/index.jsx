import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-500' : 'text-gray-600 hover:text-blue-400';
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Your Logo
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex space-x-8">
              <Link to="/" className={`${isActive('/')} transition-colors duration-200 font-medium`}>
                Home
              </Link>
              <Link to="/exemple1" className={`${isActive('/exemple1')} transition-colors duration-200 font-medium`}>
                Example 1
              </Link>
              <Link to="/exemple2" className={`${isActive('/exemple2')} transition-colors duration-200 font-medium`}>
                Example 2
              </Link>
              <Link to="/exemple3" className={`${isActive('/exemple3')} transition-colors duration-200 font-medium`}>
                Example 3
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
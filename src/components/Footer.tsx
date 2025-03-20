const Footer = () => {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              Twitter
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
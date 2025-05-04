import { useState, useEffect } from "react";
import { motion } from "motion/react";

const base = import.meta.env.BASE_URL;

const fetchTotalStars = async (username) => {
  try {
    let totalStars = 0;
    let page = 1;
    const perPage = 100; // GitHub API allows up to 100 items per page

    while (true) {
      const response = await fetch(
        `https://api.github.com/users/HxLu03/repos?per_page=${perPage}&page=${page}`
      );
      const repos = await response.json();

      if (repos.length === 0) break;

      totalStars += repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
      page++;
    }

    return totalStars;
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
    return null;
  }
};

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#experience">
          Experience
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#footer">
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const fetchStars = async () => {
      const totalStars = await fetchTotalStars("HxLu03"); // Replace with your GitHub username
      setStars(totalStars);
    };

    fetchStars();
  }, []);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Leo/Haoxuan Lu
          </a>
          <div className="flex items-center space-x-4">
            {/* GitHub Icon with Stars */}
            <a
              href="https://github.com/HxLu03" // Replace with your GitHub profile link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-neutral-400 hover:text-white"
            >
              <img
                src={`${base}assets/socials/github.svg`} // Corrected template literal syntax
                alt="GitHub"
                className="w-5 h-5 mr-3"
              />
              {stars !== null ? (
                <span>{stars} Stars</span>
              ) : (
                <span>Loading...</span>
              )}
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>
          </div>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;

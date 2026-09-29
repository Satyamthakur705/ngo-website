import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setWorkDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isWorkActive = ["/eye-camps", "/sewa-rasoi", "/nai-pehal"].includes(location.pathname);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO & BRAND */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <img src="/logo.png" alt="Tandicia Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-900 transition-colors">
                Tandicia Association
              </span>
              <span className="text-xs text-emerald-800 font-medium tracking-wide">
                मित्रता • दोस्ती • अपनापन
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14.5px] font-medium text-slate-700">
            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive("/about")
                  ? "text-sky-950 font-semibold bg-slate-100/80"
                  : "hover:text-sky-950 hover:bg-slate-50"
              }`}
            >
              About Tandicia
            </Link>

            {/* OUR WORK DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setWorkDropdownOpen(true)}
              onMouseLeave={() => setWorkDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  isWorkActive
                    ? "text-sky-950 font-semibold bg-slate-100/80"
                    : "hover:text-sky-950 hover:bg-slate-50"
                }`}
                onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
              >
                <span>Our Work</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    workDropdownOpen ? "rotate-180 text-emerald-700" : "text-slate-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* DROPDOWN MENU */}
              {workDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 rounded-2xl bg-white shadow-xl border border-slate-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    to="/eye-camps"
                    className="flex flex-col px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                  >
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800">
                      Eye Camps
                    </span>
                    <span className="text-xs text-slate-500">Screening, spectacles & care</span>
                  </Link>
                  <Link
                    to="/sewa-rasoi"
                    className="flex flex-col px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                  >
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800">
                      Sewa Rasoi
                    </span>
                    <span className="text-xs text-slate-500">Nutritious meals served with dignity</span>
                  </Link>
                  <Link
                    to="/nai-pehal"
                    className="flex flex-col px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                  >
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-emerald-800">
                      Nai Pehal
                    </span>
                    <span className="text-xs text-slate-500">New emerging community initiatives</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/impact"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive("/impact")
                  ? "text-sky-950 font-semibold bg-slate-100/80"
                  : "hover:text-sky-950 hover:bg-slate-50"
              }`}
            >
              Impact
            </Link>

            <Link
              to="/media"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive("/media")
                  ? "text-sky-950 font-semibold bg-slate-100/80"
                  : "hover:text-sky-950 hover:bg-slate-50"
              }`}
            >
              Media
            </Link>

            <Link
              to="/team"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive("/team")
                  ? "text-sky-950 font-semibold bg-slate-100/80"
                  : "hover:text-sky-950 hover:bg-slate-50"
              }`}
            >
              Team
            </Link>

            <Link
              to="/documents"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive("/documents")
                  ? "text-sky-950 font-semibold bg-slate-100/80"
                  : "hover:text-sky-950 hover:bg-slate-50"
              }`}
            >
              Documents
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg transition-colors ${
                isActive("/contact")
                  ? "text-sky-950 font-semibold bg-slate-100/80"
                  : "hover:text-sky-950 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* DESKTOP GLOBAL CTA BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact?interest=Volunteering"
              className="text-xs xl:text-sm font-semibold text-emerald-800 hover:text-emerald-950 px-3.5 py-2.5 rounded-full border border-emerald-700/30 hover:border-emerald-700/70 hover:bg-emerald-50/50 transition-all"
            >
              Join Us
            </Link>
            <Link
              to="/donate"
              className="text-xs xl:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 px-5 py-2.5 rounded-full shadow-xs hover:shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Support Our Work</span>
              <span className="text-amber-300">♥</span>
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-4 pb-6 space-y-3 shadow-lg">
          <Link
            to="/about"
            className="block py-2 text-base font-medium text-slate-800 hover:text-emerald-800"
          >
            About Tandicia
          </Link>

          <div className="py-2 border-y border-slate-100 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Our Work</span>
            <div className="pl-3 space-y-2">
              <Link to="/eye-camps" className="block text-sm text-slate-700 hover:text-emerald-800 font-medium">
                • Eye Camps (Screening & Spectacles)
              </Link>
              <Link to="/sewa-rasoi" className="block text-sm text-slate-700 hover:text-emerald-800 font-medium">
                • Sewa Rasoi (Food with Dignity)
              </Link>
              <Link to="/nai-pehal" className="block text-sm text-slate-700 hover:text-emerald-800 font-medium">
                • Nai Pehal (Community Initiatives)
              </Link>
            </div>
          </div>

          <Link to="/impact" className="block py-2 text-base font-medium text-slate-800 hover:text-emerald-800">
            Impact
          </Link>
          <Link to="/media" className="block py-2 text-base font-medium text-slate-800 hover:text-emerald-800">
            Media & Stories
          </Link>
          <Link to="/team" className="block py-2 text-base font-medium text-slate-800 hover:text-emerald-800">
            Team
          </Link>
          <Link to="/documents" className="block py-2 text-base font-medium text-slate-800 hover:text-emerald-800">
            Documents & Transparency
          </Link>
          <Link to="/contact" className="block py-2 text-base font-medium text-slate-800 hover:text-emerald-800">
            Contact
          </Link>

          <div className="pt-3 flex flex-col gap-2.5">
            <Link
              to="/contact?interest=Volunteering"
              className="text-center w-full py-2.5 text-sm font-semibold text-emerald-800 border border-emerald-800/40 rounded-xl"
            >
              Join Tandicia
            </Link>
            <Link
              to="/donate"
              className="text-center w-full py-2.5 text-sm font-semibold text-white bg-emerald-800 rounded-xl shadow-xs"
            >
              Support Our Work ♥
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
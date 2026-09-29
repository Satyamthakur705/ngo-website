import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* MICRO CTA STRIP */}
      <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-emerald-950 border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              Be There for Someone
            </span>
            <p className="text-xl md:text-2xl font-serif text-white tracking-tight">
              "You don't need to do everything. Sometimes, simply being there makes a difference."
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact?interest=Volunteering"
              className="bg-white text-slate-950 hover:bg-slate-100 font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-sm"
            >
              Become a Volunteer
            </Link>
            <Link
              to="/donate"
              className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all shadow-sm"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center">
                <img src="/logo.png" alt="Tandicia Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">Tandicia Association</span>
                <p className="text-xs text-emerald-400 font-medium">मित्रता • दोस्ती • अपनापन</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Connecting People. Serving Communities. Being There for Each Other. A community-driven social-impact initiative committed to accessible healthcare, dignity, and real compassion.
            </p>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                Core Philosophy
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Compassion</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Dignity</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Transparency</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">Volunteerism</span>
              </div>
            </div>
          </div>

          {/* OUR WORK COLUMN */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Our Work</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/eye-camps" className="hover:text-white transition-colors">
                  Eye Care & Screening
                </Link>
              </li>
              <li>
                <Link to="/sewa-rasoi" className="hover:text-white transition-colors">
                  Sewa Rasoi (Food Relief)
                </Link>
              </li>
              <li>
                <Link to="/nai-pehal" className="hover:text-white transition-colors">
                  Nai Pehal Initiatives
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-white transition-colors">
                  Verified Social Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* ORGANISATION COLUMN */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Organisation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Tandicia
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  The People Behind
                </Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-white transition-colors">
                  Media & Stories
                </Link>
              </li>
              <li>
                <Link to="/documents" className="hover:text-white transition-colors">
                  Documents & Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* GET INVOLVED & CONTACT */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/contact?interest=Volunteering" className="hover:text-white transition-colors">
                  Join as Volunteer
                </Link>
              </li>
              <li>
                <Link to="/contact?interest=Partnership" className="hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-white transition-colors">
                  Donate / Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="pt-2 text-xs text-slate-400">
              <p>Email: <a href="mailto:contact@tandiciaassociation.com" className="text-slate-300 hover:underline">contact@tandiciaassociation.com</a></p>
              <p className="mt-1">Lucknow, Uttar Pradesh, India</p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Tandicia Association. All verified records reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/documents" className="hover:text-slate-300 transition-colors">
              Statutory Transparency
            </Link>
            <Link to="/about" className="hover:text-slate-300 transition-colors">
              Our Values
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Feedback & Grievance
            </Link>
            <Link to="/admin" className="text-slate-400 hover:text-slate-200 transition-colors">
              Admin Portal 🔐
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

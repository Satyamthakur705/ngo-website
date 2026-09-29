import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 font-sans">
      <Navbar />

      <main>
        {/* ========================================================
            HERO
            ======================================================== */}
        <section className="relative py-28 bg-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/team/team.png"
              alt="Tandicia community gathering"
              className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              Our Identity & Purpose
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              About Tandicia
            </h1>
            <p className="text-2xl sm:text-3xl text-amber-200/90 font-serif mb-6">
              मित्रता • दोस्ती • अपनापन
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Connecting People. Serving Communities. Being There for Each Other.
            </p>
          </div>
        </section>

        {/* ========================================================
            SECTION 1 — WHO WE ARE
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Grassroots Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Who We Are
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                <strong>Tandicia Association</strong> is a community-driven organisation bringing together volunteers, professionals, doctors, supporters, and everyday community members to address real social and community needs.
              </p>
              <p>
                We believe that the most powerful social change does not happen from distant offices, but on the ground—where people meet as equals. Whether it is screening the eyes of an elder who cannot afford an examination, serving a hot meal with genuine dignity, or standing by a family navigating crisis, Tandicia exists to be there.
              </p>
              <p className="italic text-slate-600 border-l-4 border-emerald-700 pl-4 py-1">
                "Our guiding light is simple: service rooted in respect, friendships that cross social boundaries, and a sense of shared belonging that leaves no one behind."
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2 — OUR VISION
            ======================================================== */}
        <section className="relative py-24 bg-sky-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/public/gallery/image7.png"
              alt="Community solidarity"
              className="w-full h-full object-cover filter brightness-[0.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-950/70 to-sky-950/90" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold block">
              Our Vision
            </span>
            <blockquote className="text-2xl sm:text-4xl font-serif leading-relaxed text-white font-medium">
              "A connected and compassionate community where people stand by each other—with Mitrata, Dosti aur Apnapan."
            </blockquote>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Every initiative we undertake is measured by one standard: does it elevate human dignity and strengthen social bonds?
            </p>
          </div>
        </section>

        {/* ========================================================
            SECTION 3 — OUR OBJECTIVES
            ======================================================== */}
        <section className="py-20 bg-stone-50 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Strategic Focus
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Our Objectives
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                Six practical pillars guiding our verified field operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-900 flex items-center justify-center text-xl font-bold mb-5">
                  🩺
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Accessible Healthcare</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Delivering preventive diagnostics, primary vision screenings, corrective spectacles, and doctor consultations directly to underserved areas.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-xl font-bold mb-5">
                  🍲
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Community Service</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Providing food relief and nutritional care with dignity through regular Sewa Rasoi community kitchen drives.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center text-xl font-bold mb-5">
                  🤝
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Volunteerism</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Mobilizing citizens, youth, and professionals to actively dedicate time and skills to grassroots nation-building.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-900 flex items-center justify-center text-xl font-bold mb-5">
                  🛡️
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Support for People in Need</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Creating responsive safety nets for senior citizens, single parents, and economically marginalized families.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-900 flex items-center justify-center text-xl font-bold mb-5">
                  🔗
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Meaningful Partnerships</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Collaborating transparently with ethical hospitals, doctors, educational institutes, and community groups to multiply impact.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-900 flex items-center justify-center text-xl font-bold mb-5">
                  🌱
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Sustainable Community Initiatives</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Designing long-term programmes that foster community self-reliance, preventative health habits, and mutual cooperation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 4 — OUR JOURNEY
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Milestones
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Our Journey
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                Key verified milestones achieved through community solidarity.
              </p>
            </div>

            {/* Visual Timeline */}
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 space-y-12">
              
              {/* Milestone 1 */}
              <div className="relative pl-8 md:pl-10">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-700 border-4 border-white shadow-xs" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Inception
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  Formation of Tandicia Association
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2 mb-4">
                  Born from a shared realization that compassion and friendship are vital social forces, professionals and community volunteers came together with the motto: मित्रता • दोस्ती • अपनापन.
                </p>
                <img src="/public/team/team.png" alt="Inception team" className="w-full max-w-md h-48 object-cover rounded-2xl shadow-xs" />
              </div>

              {/* Milestone 2 */}
              <div className="relative pl-8 md:pl-10">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-800 border-4 border-white shadow-xs" />
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md">
                  Healthcare Outreach
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  Launch of Community Eye Care Camps
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2 mb-4">
                  Mobilized certified ophthalmologists and volunteers to conduct free diagnostic eye screening camps, distributing prescription spectacles and identifying patients needing cataract procedures.
                </p>
                <img src="/story1.png" alt="Eye camp launch" className="w-full max-w-md h-48 object-cover rounded-2xl shadow-xs" />
              </div>

              {/* Milestone 3 */}
              <div className="relative pl-8 md:pl-10">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-4 border-white shadow-xs" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md">
                  Nutritional Dignity
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  Establishment of Sewa Rasoi
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2 mb-4">
                  Commenced volunteer-driven community kitchens serving warm, hygienic, and nutritious meals to attendants outside hospitals and underserved neighbourhoods.
                </p>
                <img src="/image.png" alt="Sewa Rasoi launch" className="w-full max-w-md h-48 object-cover rounded-2xl shadow-xs" />
              </div>

              {/* Milestone 4 */}
              <div className="relative pl-8 md:pl-10">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-700 border-4 border-white shadow-xs" />
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 bg-indigo-50 px-2.5 py-1 rounded-md">
                  Expanding Horizons
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  Inauguration of Nai Pehal Platform
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2 mb-4">
                  Expanded beyond healthcare and nutrition to support elderly citizens living alone and assist single-parent households through specialized social circles.
                </p>
                <img src="/story2.png" alt="Nai Pehal expansion" className="w-full max-w-md h-48 object-cover rounded-2xl shadow-xs" />
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 5 — OUR ASSOCIATIONS
            ======================================================== */}
        <section className="py-20 bg-stone-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Network & Alliances
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Our Associations
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                Working collaboratively across professional and social ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center justify-center">
                <span className="text-2xl mb-2">🏥</span>
                <span className="text-sm font-bold text-slate-900">Medical</span>
                <span className="text-xs text-slate-500 mt-1">Eye hospitals & clinics</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center justify-center">
                <span className="text-2xl mb-2">🎓</span>
                <span className="text-sm font-bold text-slate-900">Educational</span>
                <span className="text-xs text-slate-500 mt-1">Colleges & youth groups</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center justify-center">
                <span className="text-2xl mb-2">🏢</span>
                <span className="text-sm font-bold text-slate-900">Corporate</span>
                <span className="text-xs text-slate-500 mt-1">CSR & support partners</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center justify-center">
                <span className="text-2xl mb-2">👥</span>
                <span className="text-sm font-bold text-slate-900">Community</span>
                <span className="text-xs text-slate-500 mt-1">Resident associations</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col items-center justify-center col-span-2 md:col-span-1">
                <span className="text-2xl mb-2">🏛️</span>
                <span className="text-sm font-bold text-slate-900">Institutional</span>
                <span className="text-xs text-slate-500 mt-1">Public health bodies</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 6 — OUR VALUES
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Our Values
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-rose-100 text-rose-900 flex items-center justify-center text-xl mb-4">
                  ❤️
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Compassion</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Approaching every human being with heartfelt care, empathy, and genuine love.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 text-amber-900 flex items-center justify-center text-xl mb-4">
                  👑
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Dignity</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ensuring service never demeans, but always uplifts the self-respect of each individual.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center text-xl mb-4">
                  🤲
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Service</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Selfless dedication to the welfare of others without ego or expectation of reward.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-sky-100 text-sky-900 flex items-center justify-center text-xl mb-4">
                  🌐
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Community</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Believing that solidarity, mutual aid, and kinship are society’s greatest treasures.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 mx-auto rounded-full bg-indigo-100 text-indigo-900 flex items-center justify-center text-xl mb-4">
                  ⚖️
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Integrity</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unbending transparency, clean statutory records, and strict accountability in every action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FINAL CTA
            ======================================================== */}
        <section className="py-20 bg-emerald-950 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold block">
              Walk With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Be Part of the Journey
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Whether you are a medical doctor, a working professional, a student, or someone who wants to help, there is a place for you at Tandicia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact?interest=Volunteering"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm transition-all"
              >
                Join Us
              </Link>
              <Link
                to="/contact?interest=Partnership"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white border border-emerald-600 font-semibold text-sm transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { teamMembers } from "../data/teamData";

export default function Team() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const patron = teamMembers.find(m => m.category === "Patron");
  const doctors = teamMembers.filter(m => m.category === "Medical");

  const filteredMembers = teamMembers.filter(member => {
    const matchesCategory = selectedCategory === "All" || member.category === selectedCategory;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          member.volunteerId.includes(searchQuery) ||
                          member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              alt="Tandicia Team and Volunteers"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              The Dedicated Faces of Tandicia
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              The People Behind Tandicia
            </h1>
            <p className="text-xl sm:text-2xl text-amber-200/90 font-serif mb-6">
              People who give their time, expertise and heart to serve the community.
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Tandicia is powered by doctors, professionals, youth, and compassionate citizens who step forward with verified dedication.
            </p>
          </div>
        </section>

        {/* ========================================================
            PATRON & SPIRITUAL INSPIRATION
            ======================================================== */}
        {patron && (
          <section className="py-20 bg-white border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                  Spiritual Guidance
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-2">
                  Patron & Inspiration
                </h2>
                <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 rounded-full" />
              </div>

              <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 via-white to-stone-50 p-8 sm:p-12 shadow-sm flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left">
                <div className="w-44 h-44 rounded-2xl overflow-hidden shadow-md border-2 border-amber-200 shrink-0 bg-amber-100">
                  <img
                    src={patron.image}
                    alt={patron.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                    Volunteer ID: {patron.volunteerId}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {patron.name}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-800">
                    {patron.role}
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {patron.bio}
                  </p>
                  <p className="text-xs text-amber-800 font-medium italic pt-2">
                    "सेवा • सर्विस • इंसानियत — मित्रवत समर्पण ही सच्चा धर्म है।"
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            MEDICAL PROFESSIONALS & DOCTORS
            ======================================================== */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Clinical Mentors
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mt-2">
                Medical Professionals
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Senior consultant doctors and medical specialists who lead our on-ground eye screening camps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {doctors.map((doc) => (
                <div
                  key={doc.id}
                  className="rounded-3xl border border-sky-200/80 bg-white p-7 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-center"
                >
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xs border border-slate-200 shrink-0 bg-slate-100">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-900 text-xs font-semibold">
                      Volunteer ID: {doc.volunteerId}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800">
                      {doc.role}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {doc.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            ALL VERIFIED VOLUNTEERS DIRECTORY
            ======================================================== */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                On-Ground Roll of Honour
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Tandicia Volunteers ({teamMembers.length})
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                Real citizens, verified identity badge holders, and community pillars serving at our Eye Camps & Sewa Rasoi.
              </p>
            </div>

            {/* Filter & Search Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto mb-12">
              <div className="flex flex-wrap items-center gap-2">
                {["All", "Medical", "Core", "Volunteer"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-stone-100 text-slate-700 hover:bg-stone-200"
                    }`}
                  >
                    {cat === "All" ? "All Volunteers" : cat === "Medical" ? "Doctors & Medical" : cat === "Core" ? "Core Team" : "Field Volunteers"}
                  </button>
                ))}
              </div>

              <div className="w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search by name or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 text-xs rounded-full border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20"
                />
              </div>
            </div>

            {/* Volunteers Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="rounded-2xl border border-slate-200/90 bg-stone-50/40 hover:bg-white hover:shadow-lg transition-all p-4 flex flex-col items-center text-center group"
                >
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-xs border border-slate-200 mb-3 bg-slate-100 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-200 mb-1">
                    ID: {member.volunteerId}
                  </span>

                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {member.name}
                  </h4>

                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <div className="text-center py-12 text-slate-500 text-sm">
                No volunteers found matching your search.
              </div>
            )}
          </div>
        </section>

        {/* ========================================================
            VOLUNTEER COMMUNITY CELEBRATION
            ======================================================== */}
        <section className="py-20 bg-emerald-950 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold block">
              Sewa • Service • Humanity
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              You Can Be Part of This Team
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
              Our volunteers come from diverse walks of life—from medicine and business to college students and homemakers. Every pair of hands makes a real difference.
            </p>
            <div className="pt-4">
              <Link
                to="/contact?interest=Volunteering"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm transition-all shadow-md"
              >
                <span>Become a Volunteer</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

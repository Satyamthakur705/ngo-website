import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const initiatives = [
  {
    id: "senior-citizens",
    title: "Senior Citizens Care",
    tagline: "Companionship, respect and presence for our elders",
    details: "Many elderly individuals face social isolation alongside age-related ailments. Tandicia connects volunteers with senior citizens for home visits, doctor accompaniments, routine medicine pickups, and shared conversations to restore their sense of family belonging.",
    status: "Active Community Programme",
    icon: "👵👴"
  },
  {
    id: "single-parents",
    title: "Single Parents Support",
    tagline: "Solidarity and assistance for solo guardians",
    details: "Raising children alone is fraught with financial, emotional, and social hurdles. Tandicia provides peer support groups, school supplies assistance, and volunteer tutoring networks so single mothers and fathers never feel alone in their struggle.",
    status: "Active Programme",
    icon: "👨‍👧👩‍👦"
  },
  {
    id: "community-support",
    title: "Community Mutual Aid",
    tagline: "Grassroots emergency aid and neighborhood cooperation",
    details: "Mobilizing swift assistance during localized distress—such as providing emergency winter blankets, seasonal health kits, or assisting families through sudden medical crises.",
    status: "Active Field Initiative",
    icon: "🤝"
  },
  {
    id: "health-awareness",
    title: "Health & Hygiene Awareness",
    tagline: "Preventative education for sustainable well-being",
    details: "Conducting community workshops on diabetic eye care, clean drinking water practices, maternal nutrition, and seasonal epidemic prevention in partnership with medical volunteers.",
    status: "Periodic Drives",
    icon: "🩺"
  },
  {
    id: "education-youth",
    title: "Education & Youth Mentorship",
    tagline: "Nurturing curiosity and social responsibility in young minds",
    details: "Connecting university youth and young professionals with children from underprivileged backgrounds for remedial coaching, basic digital literacy, and leadership mentoring.",
    status: "Volunteer Circle",
    icon: "📚"
  },
  {
    id: "future-initiatives",
    title: "Future Community Initiatives",
    tagline: "Listening to emerging grassroots needs",
    details: "We constantly consult with community elders and local residents to identify unmet social challenges. As verified initiatives are structured and approved, they are piloted through Nai Pehal.",
    status: "In Planning & Development",
    icon: "🌱"
  }
];

export default function NaiPehal() {
  const [expandedId, setExpandedId] = useState("senior-citizens");

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
              src="/story2.png"
              alt="Community interaction under Nai Pehal"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
              Emerging Frontiers of Service
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Nai Pehal
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-300 font-serif mb-6">
              New Ideas. New Connections. New Possibilities.
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Communities evolve, and so do their challenges. Nai Pehal is Tandicia's agile platform for incubating compassionate responses to emerging social realities.
            </p>
          </div>
        </section>

        {/* ========================================================
            CORE MESSAGE
            ======================================================== */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              Core Guiding Principle
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              मित्रता, दोस्ती और अपनापन
            </h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full" />
            <p className="text-xl text-slate-700 font-serif max-w-2xl mx-auto leading-relaxed pt-2">
              "Creating opportunities for people to connect, support one another, and build stronger, more compassionate communities."
            </p>
          </div>
        </section>

        {/* ========================================================
            INITIATIVE CARDS (Expandable)
            ======================================================== */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Action Areas
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Initiatives Under Nai Pehal
              </h3>
              <p className="text-slate-600 text-sm mt-3">
                Click on any initiative below to explore our verified community interventions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {initiatives.map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-3xl border transition-all overflow-hidden ${
                      isExpanded
                        ? "bg-white border-emerald-700 shadow-md ring-1 ring-emerald-700/20"
                        : "bg-white border-slate-200/80 hover:border-slate-300 shadow-xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                            {item.status}
                          </span>
                          <h4 className="text-xl font-bold text-slate-900 mt-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">
                            {item.tagline}
                          </p>
                        </div>
                      </div>
                      <span className="text-slate-400 font-bold text-xl ml-2">
                        {isExpanded ? "−" : "+"}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-sm text-slate-600 leading-relaxed animate-in fade-in duration-200">
                        <p className="mb-4">{item.details}</p>
                        <Link
                          to={`/contact?interest=${encodeURIComponent(item.title)}`}
                          className="inline-flex items-center text-xs font-semibold text-emerald-800 hover:text-emerald-950 underline underline-offset-4"
                        >
                          Get involved in this initiative →
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            STORIES OF CONNECTION
            ======================================================== */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Real Impacts
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Stories of Connection
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              <div className="rounded-3xl border border-slate-200 p-8 bg-stone-50 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img src="/story5.png" alt="Elder companionship" className="w-16 h-16 rounded-2xl object-cover" />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Weekly Companionship Visit</h4>
                      <p className="text-xs text-emerald-800 font-semibold">Senior Citizen Care</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "When volunteers drop by simply to inquire how my day was or read the morning paper with me, the loneliness that felt like a heavy stone lifts away. This isn't charity; it is family."
                  </p>
                </div>
                <span className="text-xs text-slate-400 font-medium block pt-4">
                  Elder community resident, Lucknow
                </span>
              </div>

              <div className="rounded-3xl border border-slate-200 p-8 bg-stone-50 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img src="/donate.png" alt="Single mother support" className="w-16 h-16 rounded-2xl object-cover" />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Education Support Circle</h4>
                      <p className="text-xs text-emerald-800 font-semibold">Single Parents Programme</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    "As a widowed mother of two, buying textbooks every new school session was my biggest anxiety. Tandicia supporters stepped in quietly and treated my children with absolute dignity."
                  </p>
                </div>
                <span className="text-xs text-slate-400 font-medium block pt-4">
                  Community Beneficiary, Uttar Pradesh
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            GET INVOLVED
            ======================================================== */}
        <section className="py-20 bg-slate-950 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
              Co-Create With Us
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Have An Idea for Community Good?
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              If you see a community need in your area that deserves attention, friendship, and collective effort, let’s talk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/contact?interest=Nai%20Pehal"
                className="px-7 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-all"
              >
                Suggest an Initiative
              </Link>
              <Link
                to="/contact?interest=Volunteering"
                className="px-7 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm transition-all"
              >
                Volunteer
              </Link>
              <Link
                to="/contact?interest=Partnership"
                className="px-7 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all"
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

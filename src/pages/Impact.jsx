import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Impact() {
  const verifiedStats = [
    { label: "People Reached", value: "XX+", desc: "Direct beneficiaries of all field activities", color: "text-amber-400" },
    { label: "Eye Camps", value: "4+", desc: "Full-day clinical diagnostic screening camps", color: "text-emerald-400" },
    { label: "Spectacles Distributed", value: "XX+", desc: "Free prescription corrective eyeglasses", color: "text-sky-400" },
    { label: "Meals Served", value: "XX+", desc: "Fresh, hot meals served via Sewa Rasoi", color: "text-amber-300" },
    { label: "Active Volunteers", value: "XX+", desc: "Professionals, students & community members", color: "text-rose-400" },
    { label: "Community Hubs", value: "XX+", desc: "Districts & village clusters served", color: "text-teal-400" }
  ];

  const programmes = [
    {
      title: "Eye Camps & Vision Care",
      activity: "Comprehensive diagnostic eye refraction, cataract screening & spectacle provision",
      reached: "XX+ Patients examined & verified",
      outcome: "Immediate restoration of clear vision, reading ability, and work safety for daily earners.",
      image: "/camps/camp3/3rd camp/E3-8.jpeg",
      tag: "Healthcare Impact"
    },
    {
      title: "Sewa Rasoi Nutritional Relief",
      activity: "Fresh, hygienic, warm meals prepared and distributed to attendants and workers",
      reached: "XX+ Wholesome meals distributed",
      outcome: "Alleviated food insecurity for families camping outside government medical facilities.",
      image: "/image.png",
      tag: "Nutrition & Dignity"
    },
    {
      title: "Nai Pehal Community Mutual Aid",
      activity: "Direct companionship, elder support, and single-parent educational assistance",
      reached: "XX+ Households supported",
      outcome: "Reduced elder loneliness and provided vital social safety nets in difficult moments.",
      image: "/story2.png",
      tag: "Social Solidarity"
    }
  ];

  const stories = [
    {
      name: "Smt. Ram Dulari",
      category: "Eye Care Beneficiary",
      quote: "Being able to see clearly again has restored my confidence. I can cook without fear and read my holy books every morning.",
      image: "/camps/camp3/3rd camp/E3-5.jpeg"
    },
    {
      name: "Hospital Attendant Family",
      category: "Sewa Rasoi Beneficiary",
      quote: "When your child is admitted, you forget about yourself. Having a warm plate of food handed to you with respect kept us going.",
      image: "/image copy.png"
    },
    {
      name: "Local Elder Resident",
      category: "Senior Care Beneficiary",
      quote: "The companionship visits from the Tandicia youth bring laughter back into my quiet home. I look forward to their visits.",
      image: "/story5.png"
    }
  ];

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
              src="/camps/camp2/2nd Camp/E2-3.jpeg"
              alt="Tandicia verified impact"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              Transparent Outcomes
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Our Impact
            </h1>
            <p className="text-xl sm:text-2xl text-amber-200/90 font-serif mb-6">
              Measuring the Difference We Make
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We do not measure success in marketing slogans, but in real smiles, restored vision, hot plates served, and the quiet dignity restored to human lives.
            </p>
          </div>
        </section>

        {/* ========================================================
            IMPACT DASHBOARD
            ======================================================== */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Verified Records
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                Impact Dashboard
              </h2>
              <p className="text-xs text-slate-400 mt-2">
                *Statistical placeholders displayed pending periodic internal audit verification.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
              {verifiedStats.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-center flex flex-col justify-between">
                  <div>
                    <span className={`text-3xl sm:text-4xl font-extrabold font-mono ${item.color} block mb-2`}>
                      {item.value}
                    </span>
                    <h3 className="text-sm font-bold text-slate-200 mb-1">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            IMPACT BY PROGRAMME (Activity → Reached → Outcome → Photo)
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Programmatic Outcomes
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Impact By Programme
              </h2>
            </div>

            <div className="space-y-12">
              {programmes.map((p, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-200 overflow-hidden bg-stone-50/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8"
                >
                  <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-xs">
                    <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
                  </div>
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md">
                      {p.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {p.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <div className="p-4 rounded-xl bg-white border border-slate-200">
                        <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Activity</span>
                        <p className="text-xs text-slate-700 leading-relaxed">{p.activity}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-slate-200">
                        <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Scale Reached</span>
                        <p className="text-xs text-emerald-800 font-semibold leading-relaxed">{p.reached}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-white border border-slate-200">
                        <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Measurable Outcome</span>
                        <p className="text-xs text-slate-700 leading-relaxed">{p.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            COMMUNITY LOCATIONS
            ======================================================== */}
        <section className="py-20 bg-stone-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Geographic Presence
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Where We Serve
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Conducting field initiatives across verified grassroots clusters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                <span className="text-3xl mb-3 block">📍</span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">New Delhi & Faridabad, Haryana</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Comprehensive free eye screening and spectacle distribution camps at Kusumpur Pahari, Bhati Mines (Sanjay Colony) and Mewla Maharajpur, Faridabad.
                </p>
                <span className="text-xs font-semibold text-emerald-800">Verified On-Site Camps</span>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                <span className="text-3xl mb-3 block">📍</span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">NCR & Peri-Urban Belts</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Mobile diagnostic eye checks and senior citizen support drives across underserved settlement clusters.
                </p>
                <span className="text-xs font-semibold text-emerald-800">Periodic Diagnostic Drives</span>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                <span className="text-3xl mb-3 block">📍</span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Community Mutual Aid Hubs</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Nutritional support via Sewa Rasoi and senior citizen care circles under the Nai Pehal initiative.
                </p>
                <span className="text-xs font-semibold text-emerald-800">Ongoing Grassroots Circles</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            STORIES OF IMPACT
            ======================================================== */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Human Centered
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Impact Through People
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stories.map((s, idx) => (
                <div key={idx} className="p-7 rounded-3xl bg-stone-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <img src={s.image} alt={s.name} className="w-full h-48 object-cover rounded-2xl mb-5" />
                    <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide block mb-1">
                      {s.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{s.name}</h3>
                    <p className="text-sm text-slate-600 italic leading-relaxed">
                      "{s.quote}"
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 font-medium block pt-4">
                    Verified Field Testimony
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            TRANSPARENCY NOTE
            ======================================================== */}
        <section className="py-16 bg-slate-100 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold block">
              Rigorous Standards
            </span>
            <h3 className="text-2xl font-bold text-slate-900">
              Verified Programme Records
            </h3>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Tandicia maintains physical attendance rosters, doctor prescription slips, and camp registries for all activities. We do not invent figures or amplify numbers for publicity.
            </p>
            <div className="pt-3">
              <Link
                to="/documents"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
              >
                <span>View Documents & Reports</span>
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

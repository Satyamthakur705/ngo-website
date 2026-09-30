import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { teamMembers } from "../data/teamData";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 font-sans">
      <Navbar />

      <main>
        {/* ========================================================
            HERO SECTION
            ======================================================== */}
        <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-slate-950">
          {/* Authentic Tandicia Background Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src="/camps/camp2/2nd Camp/E2-3.jpeg"
              alt="Tandicia Volunteers and Community Activity"
              className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.08] saturate-[0.9]"
            />
            {/* Warm cinematic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-emerald-900/40 border border-emerald-400/30 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
              <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-emerald-200/90 uppercase">
                मित्रता • दोस्ती • अपनापन
              </span>
            </div>

            {/* Decorative line above heading */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-400/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/70" />
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-400/60" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5 drop-shadow-[0_2px_20px_rgba(255,255,255,0.08)]">
              <span className="block">TANDICIA</span>
              <span className="block mt-1 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">ASSOCIATION</span>
            </h1>

            {/* Sub-headline with italic elegance */}
            <p className="text-lg sm:text-2xl font-serif italic text-amber-200/90 font-normal tracking-wide max-w-3xl mx-auto mb-4 leading-relaxed">
              Connecting People. Serving Communities.
              <br className="hidden sm:block" />
              Being There for Each Other.
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="h-[1px] w-8 bg-amber-400/40" />
              <span className="text-amber-400/60 text-xs">✦</span>
              <span className="h-[1px] w-8 bg-amber-400/40" />
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
              A community-driven initiative bringing people, professionals and volunteers together to create meaningful social impact.
            </p>

            {/* Global CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/eye-camps"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-base transition-all shadow-lg hover:shadow-emerald-900/40 hover:-translate-y-0.5"
              >
                Explore Our Work
              </Link>
              <Link
                to="/contact?interest=Volunteering"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-semibold text-base transition-all hover:-translate-y-0.5"
              >
                Join Tandicia
              </Link>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stone-50 to-transparent z-10" />
        </section>

        {/* ========================================================
            SECTION 2 — OUR PURPOSE
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Our Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Together, We Can Make a Difference
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mitrata Block */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-900 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-105 transition-transform">
                  मि
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Mitrata</h3>
                <p className="text-sm font-semibold text-sky-800 mb-3">मित्रता</p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Building meaningful connections across barriers, cultivating friendship that creates trust and mutual respect in communities.
                </p>
              </div>

              {/* Dosti Block */}
              <div className="p-8 rounded-3xl bg-emerald-50/60 border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-105 transition-transform">
                  दो
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Dosti</h3>
                <p className="text-sm font-semibold text-emerald-800 mb-3">दोस्ती</p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Standing by people when they need support the most, offering reliable companionship and dedicated solidarity through life’s struggles.
                </p>
              </div>

              {/* Apnapan Block */}
              <div className="p-8 rounded-3xl bg-amber-50/60 border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-105 transition-transform">
                  अप
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Apnapan</h3>
                <p className="text-sm font-semibold text-amber-800 mb-3">अपनापन</p>
                <p className="text-slate-600 leading-relaxed text-base">
                  Creating dignity, belonging, and genuine warmth so no one feels abandoned, overlooked, or unheard in our society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 3 — OUR WORK
            ======================================================== */}
        <section className="py-20 bg-stone-50 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                  Field Programmes
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                  Our Work
                </h2>
              </div>
              <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-sm">
                Authentic, on-ground programmes designed to deliver tangible medical care, nutritional dignity, and social solidarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Eye Camps Card */}
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all flex flex-col group">
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src="/camps/camp3/3rd camp/E3-8.jpeg"
                    alt="Doctor examining elderly beneficiary at Eye Camp"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-sky-950/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                    Healthcare
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Eye Camps</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      Accessible eye care, comprehensive screening, custom spectacles distribution, and medical doctor consultation for underserved communities.
                    </p>
                  </div>
                  <Link
                    to="/eye-camps"
                    className="inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-emerald-950 group-hover:translate-x-1 transition-all"
                  >
                    Explore Eye Camps →
                  </Link>
                </div>
              </div>

              {/* Sewa Rasoi Card */}
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all flex flex-col group">
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src="/image.png"
                    alt="Volunteers serving warm meals at Sewa Rasoi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                    Nutrition & Dignity
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Sewa Rasoi</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      Serving freshly prepared, nutritious food with utmost dignity, compassion, and community participation.
                    </p>
                  </div>
                  <Link
                    to="/sewa-rasoi"
                    className="inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-emerald-950 group-hover:translate-x-1 transition-all"
                  >
                    Discover Sewa Rasoi →
                  </Link>
                </div>
              </div>

              {/* Nai Pehal Card */}
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all flex flex-col group">
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src="/story2.png"
                    alt="Community engagement under Nai Pehal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                    New Initiatives
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Nai Pehal</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      New initiatives responding dynamically to emerging community needs: senior citizen care, single parent support, and grassroots solutions.
                    </p>
                  </div>
                  <Link
                    to="/nai-pehal"
                    className="inline-flex items-center text-sm font-semibold text-emerald-800 hover:text-emerald-950 group-hover:translate-x-1 transition-all"
                  >
                    Explore Nai Pehal →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 4 — IMPACT
            ======================================================== */}
        <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                Transparent Accountability
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
                Our Impact So Far
              </h2>
              <p className="text-slate-400 text-sm mt-3">
                All numbers are tracked via verified on-ground camp logs and programme registers.
              </p>
            </div>

            {/* 4 Verified Stat Blocks */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-3xl sm:text-5xl font-extrabold text-amber-400 block mb-2 font-mono">
                  XX+
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-200 block">
                  People Reached
                </span>
                <span className="text-xs text-slate-500 mt-1 block">Beneficiaries served</span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-3xl sm:text-5xl font-extrabold text-emerald-400 block mb-2 font-mono">
                  XX+
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-200 block">
                  Eye Camps
                </span>
                <span className="text-xs text-slate-500 mt-1 block">Conducted on-site</span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-3xl sm:text-5xl font-extrabold text-sky-400 block mb-2 font-mono">
                  XX+
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-200 block">
                  Spectacles Distributed
                </span>
                <span className="text-xs text-slate-500 mt-1 block">Free corrective eyewear</span>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-3xl sm:text-5xl font-extrabold text-amber-300 block mb-2 font-mono">
                  XX+
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-200 block">
                  Volunteers & Supporters
                </span>
                <span className="text-xs text-slate-500 mt-1 block">Dedicated community members</span>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/impact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>View Our Impact</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 5 — EYE CAMPS SPOTLIGHT
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              
              {/* Large photograph on left */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-4/3">
                  <img
                    src="/camps/camp1/1st Camp/E1-4.jpeg"
                    alt="Doctor screening an elderly beneficiary at Tandicia Eye Camp"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white text-sm font-medium">
                      On-site diagnostic screening by qualified eye specialists
                    </p>
                  </div>
                </div>
              </div>

              {/* Content on right */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                  Dedicated Programme
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                  Bringing Vision Closer to Those Who Need It
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Poor eyesight shouldn't prevent children from learning, parents from earning, or grandparents from seeing the faces of their loved ones. Our community eye camps bring professional diagnosis directly to doorsteps.
                </p>

                {/* 4 Pillars */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-xs font-semibold text-sky-900 uppercase tracking-wide block mb-1">Pillar 1</span>
                    <h4 className="text-base font-bold text-slate-900">Screening</h4>
                    <p className="text-xs text-slate-500 mt-1">Comprehensive vision checks</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wide block mb-1">Pillar 2</span>
                    <h4 className="text-base font-bold text-slate-900">Spectacles</h4>
                    <p className="text-xs text-slate-500 mt-1">Prescription corrective eyewear</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-xs font-semibold text-amber-900 uppercase tracking-wide block mb-1">Pillar 3</span>
                    <h4 className="text-base font-bold text-slate-900">Medical Consultation</h4>
                    <p className="text-xs text-slate-500 mt-1">Qualified doctors & advice</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-xs font-semibold text-indigo-900 uppercase tracking-wide block mb-1">Pillar 4</span>
                    <h4 className="text-base font-bold text-slate-900">Referrals</h4>
                    <p className="text-xs text-slate-500 mt-1">Hospital tie-ups for surgery</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/eye-camps"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950"
                  >
                    View All Eye Camps →
                  </Link>
                </div>
              </div>

            </div>

            {/* 3 Featured Camp Cards with Real Photos & Verified Banners */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="rounded-2xl border border-slate-200 p-5 bg-stone-50/50 hover:bg-white hover:shadow-md transition-all">
                <img src="/camps/camp1/1st Camp/E1-6.jpeg" alt="Kusumpur Pahari Camp Banner" className="w-full h-44 object-cover rounded-xl mb-4" />
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-emerald-800">Sanjay Colony, New Delhi</span>
                  <span>29 Aug 2025</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Bhati Mines Camp</h4>
                <p className="text-xs text-slate-600 mb-3">Sherawali Mata Mandir, Block C. Free eye check-up and spectacles distribution.</p>
                <span className="text-xs font-semibold text-sky-900">Official Camp Record</span>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 bg-stone-50/50 hover:bg-white hover:shadow-md transition-all">
                <img src="/camps/camp2/2nd Camp/E2-14.jpeg" alt="Bhati Mines Camp Volunteers" className="w-full h-44 object-cover rounded-xl mb-4" />
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-emerald-800">Kusumpur Pahari, New Delhi</span>
                  <span>14 Sep 2025</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Kusumpur Pahari Camp</h4>
                <p className="text-xs text-slate-600 mb-3">Abhyudaya A-116/A. Full screening team, free medicines, and eye consultations.</p>
                <span className="text-xs font-semibold text-sky-900">Official Camp Record</span>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 bg-stone-50/50 hover:bg-white hover:shadow-md transition-all">
                <img src="/camps/camp3/3rd camp/E3-3.jpeg" alt="Clinical eye diagnostic screening" className="w-full h-44 object-cover rounded-xl mb-4" />
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-emerald-800">Faridabad, Haryana</span>
                  <span>12 Oct 2025</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Mewla Maharajpur Camp</h4>
                <p className="text-xs text-slate-600 mb-3">Diagnostic examination by qualified doctors with Centre for Eyes.</p>
                <span className="text-xs font-semibold text-sky-900">Verified Clinical Partner</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 6 — SEWA RASOI
            ======================================================== */}
        <section className="relative py-28 bg-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/image copy.png"
              alt="Volunteers serving food at Sewa Rasoi"
              className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-3">
                Nutrition & Care
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
                Sewa Rasoi
              </h2>
              <p className="text-xl sm:text-2xl text-emerald-300 font-serif mb-6">
                Food with dignity. Service with compassion.
              </p>
              <p className="text-slate-300 text-base leading-relaxed mb-8">
                Hunger cannot be addressed with pity; it must be met with dignity. Sewa Rasoi brings together volunteers to cook and serve hot, wholesome meals to patients, attendants, and hardworking community members.
              </p>
              <Link
                to="/sewa-rasoi"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>Discover Sewa Rasoi</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 7 — NAI PEHAL
            ======================================================== */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Emerging Community Initiatives
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Nai Pehal
              </h2>
              <p className="text-slate-600 text-base mt-2">
                New ideas. New connections. New possibilities.
              </p>
              <div className="inline-block mt-4 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 font-semibold text-sm">
                मित्रता, दोस्ती और अपनापन
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Senior Citizens */}
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <img src="/story5.png" alt="Senior Citizens Care" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Senior Citizens</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Social companionship, medical accompaniment, and dignity programmes for elder community members who live on their own.
                  </p>
                </div>
              </div>

              {/* Single Parents */}
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <img src="/donate.png" alt="Single Parents and Family Support" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Single Parents</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Support circles, child educational assistance, and peer solidarity for courageous parents raising families single-handedly.
                  </p>
                </div>
              </div>

              {/* Community Initiatives */}
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all">
                <img src="/camps/camp_team_selfie.jpg" alt="Tandicia Volunteers and Community Initiatives" className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Community Initiatives</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Neighbourhood mutual aid, clean water drives, awareness campaigns, and grassroots youth volunteer programmes.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/nai-pehal"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all"
              >
                <span>Explore Nai Pehal</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 8 — MEDIA
            ======================================================== */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                  Moments & Coverage
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                  Tandicia in Action
                </h2>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <Link to="/media" className="text-sm font-semibold text-emerald-800 hover:underline">
                  Read Stories →
                </Link>
                <Link to="/media#gallery" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
                  View Gallery →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Featured Large Story */}
              <div className="lg:col-span-7 bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 flex flex-col">
                <img
                  src="/story1.png"
                  alt="Beneficiary story"
                  className="w-full h-80 object-cover"
                />
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block mb-2">
                      Featured Field Story
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Restoring Clear Sight to Smt. Ram Dulari
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      "I could not thread a needle or recognize my grandchildren from across the verandah. Today, with the spectacles from Tandicia doctors, the entire world is clear again."
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link to="/media" className="text-sm font-semibold text-emerald-800 hover:text-emerald-950">
                      Read Full Story →
                    </Link>
                  </div>
                </div>
              </div>

              {/* 3 Smaller Story Cards */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex gap-4 items-center">
                  <img src="/gallery/image4.png" alt="Volunteer session" className="w-24 h-24 object-cover rounded-xl" />
                  <div>
                    <span className="text-xs text-emerald-800 font-semibold">Eye Care Mission</span>
                    <h4 className="text-base font-bold text-slate-900">Sunday Free Vision Diagnostic</h4>
                    <p className="text-xs text-slate-500 mt-1">Over a hundred residents examined by our voluntary team.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex gap-4 items-center">
                  <img src="/gallery/image5.png" alt="Sewa Rasoi meal" className="w-24 h-24 object-cover rounded-xl" />
                  <div>
                    <span className="text-xs text-amber-800 font-semibold">Sewa Rasoi</span>
                    <h4 className="text-base font-bold text-slate-900">Serving Hot Meals With Care</h4>
                    <p className="text-xs text-slate-500 mt-1">Pure nutritious meals prepared by volunteer hands.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 flex gap-4 items-center">
                  <img src="/gallery/image6.png" alt="Community gathering" className="w-24 h-24 object-cover rounded-xl" />
                  <div>
                    <span className="text-xs text-sky-800 font-semibold">Community Circle</span>
                    <h4 className="text-base font-bold text-slate-900">Standing With Single Mothers</h4>
                    <p className="text-xs text-slate-500 mt-1">Providing moral support, counseling, and guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 9 — TEAM
            ======================================================== */}
        <section className="py-20 bg-stone-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
              <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/camps/camp1/1st Camp/E1-1.jpeg"
                  alt="Tandicia Team and Volunteers"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                  Our Community
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                  The People Behind Tandicia
                </h2>
                <p className="text-slate-600 text-base leading-relaxed italic">
                  "Tandicia is powered by people who believe that meaningful change begins when we come together."
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  From experienced medical doctors and field coordinators to devoted citizens giving their time, our collective strength lies in pure service and empathy.
                </p>
                <div className="pt-2">
                  <Link
                    to="/team"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all"
                  >
                    <span>Meet All 39 Volunteers</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured Team Members Preview */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-slate-900">On-Ground Volunteer Leadership</h3>
              <p className="text-xs text-slate-500 mt-1">Verified identity badge holders dedicated to community service</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {teamMembers.slice(0, 6).map((member) => (
                <div key={member.id} className="bg-white p-3.5 rounded-2xl border border-slate-200 text-center shadow-xs hover:shadow-md transition-all">
                  <div className="w-20 h-20 mx-auto rounded-xl overflow-hidden mb-2.5 bg-slate-100 border border-slate-200">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mb-1">
                    ID: {member.volunteerId}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 truncate">{member.name}</h4>
                  <p className="text-[10px] text-slate-500 truncate">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 10 — TRANSPARENCY
            ======================================================== */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Open Governance
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Transparency Matters
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                We believe social service requires uncompromising public honesty and statutory adherence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-900 flex items-center justify-center font-bold mb-4">
                  📜
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Registration</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Formally incorporated entity records, registration certificates, and institutional credentials.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold mb-4">
                  ⚖️
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Statutory Documents</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verified PAN, legal clearances, compliance filings, and official association mandates.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold mb-4">
                  📊
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Reports</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Periodic activity reports, verified beneficiary metrics, and transparent programme documentation.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/documents"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sky-900 hover:bg-sky-800 text-white font-semibold text-sm transition-all shadow-xs"
              >
                <span>View Documents</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================
            FINAL CTA
            ======================================================== */}
        <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/camps/camp3/3rd camp/E3-12.jpeg"
              alt="Volunteers interacting with community at camp"
              className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/50" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              Make An Impact Today
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
              Be There for Someone
            </h2>
            <p className="text-lg sm:text-xl text-amber-200/90 font-serif max-w-2xl mx-auto leading-relaxed mb-10">
              "You don't need to do everything. Sometimes, simply being there makes a difference."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact?interest=Volunteering"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-base transition-all shadow-lg"
              >
                Become a Volunteer
              </Link>
              <Link
                to="/donate"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-semibold text-base transition-all shadow-lg"
              >
                Support Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
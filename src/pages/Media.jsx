import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const mediaItems = [
  { id: 1, title: "Diagnostic Testing at Village Eye Camp", category: "Eye Camps", src: "/story1.png", desc: "Our volunteer optometrist testing visual clarity." },
  { id: 2, title: "Sewa Rasoi Volunteer Kitchen", category: "Sewa Rasoi", src: "/image.png", desc: "Fresh meals cooked daily with devotion and cleanliness." },
  { id: 3, title: "Slit Lamp Geriatric Examination", category: "Eye Camps", src: "/story3.png", desc: "Senior citizen undergoing cataract diagnostic check." },
  { id: 4, title: "Community Meal Distribution Drive", category: "Sewa Rasoi", src: "/image copy.png", desc: "Serving warm food to hospital attendants." },
  { id: 5, title: "Elders Gathering Under Nai Pehal", category: "Nai Pehal", src: "/story5.png", desc: "Listening, sharing, and creating mutual belonging." },
  { id: 6, title: "Volunteer Briefing and Preparation", category: "Events", src: "/public/team/team.png", desc: "Tandicia team coordinating before field operations." },
  { id: 7, title: "Spectacles Fitting Session", category: "Eye Camps", src: "/gallery/image1.png", desc: "Beneficiaries selecting comfortable frames." },
  { id: 8, title: "Field Nutrition Camp Preparation", category: "Sewa Rasoi", src: "/gallery/image5.png", desc: "Organizing bulk ingredients for community food relief." }
];

export default function Media() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All"
    ? mediaItems
    : mediaItems.filter(item => item.category === activeFilter);

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
              src="/public/gallery/image8.png"
              alt="Tandicia community moments"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              Voices & Visuals
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Tandicia in Action
            </h1>
            <p className="text-xl sm:text-2xl text-amber-200/90 font-serif mb-6">
              Stories, Moments and Milestones
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Every photo and story captured here is an unscripted glimpse into the lives of the people we touch and the volunteers who make it possible.
            </p>
          </div>
        </section>

        {/* ========================================================
            FEATURED STORY
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 overflow-hidden bg-stone-50 grid grid-cols-1 lg:grid-cols-12 shadow-sm">
              <div className="lg:col-span-6 relative h-80 lg:h-auto">
                <img
                  src="/story1.png"
                  alt="Featured Story - Clear vision restored"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-4">
                    Featured Beneficiary Story
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    "The World Is Bright Again": Restoring Vision to Village Elders
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    In rural blocks, simple presbyopia or cataracts often force elderly workers to abandon daily crafts. A routine Tandicia diagnostic eye camp equipped 120+ beneficiaries with precision eyeglasses, allowing them to resume their livelihoods and daily reading.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span>Programme: Eye Camps</span>
                  <span className="font-semibold text-emerald-800">Verified Field Impact</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FILTERS & PHOTO GALLERY
            ======================================================== */}
        <section id="gallery" className="py-20 bg-stone-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Photo Gallery
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Moments From the Ground
              </h3>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {["All", "Eye Camps", "Sewa Rasoi", "Nai Pehal", "Events"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === category
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col group"
                >
                  <div className="h-56 overflow-hidden bg-slate-100">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            VIDEOS & MOMENTS
            ======================================================== */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Moving Visuals
              </span>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 mt-2">
                Field Video Highlights
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 text-white relative group">
                <div className="relative h-64 overflow-hidden">
                  <img src="/story3.png" alt="Eye camp video" className="w-full h-full object-cover filter brightness-[0.6]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-600/90 text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
                      ▶
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-emerald-400 font-semibold">Video Document</span>
                  <h4 className="text-lg font-bold mt-1">A Day at Tandicia Eye Screening Camp</h4>
                  <p className="text-xs text-slate-400 mt-2">Real interactions between volunteer optometrists and rural patients.</p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 text-white relative group">
                <div className="relative h-64 overflow-hidden">
                  <img src="/image.png" alt="Sewa Rasoi video" className="w-full h-full object-cover filter brightness-[0.6]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-600/90 text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
                      ▶
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-amber-400 font-semibold">Video Document</span>
                  <h4 className="text-lg font-bold mt-1">Sewa Rasoi: The Spirit of Cooking With Love</h4>
                  <p className="text-xs text-slate-400 mt-2">Behind the scenes with volunteers slicing, boiling, and packing nutritious meals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            VERIFIED MEDIA COVERAGE
            ======================================================== */}
        <section className="py-20 bg-stone-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                In the Press
              </span>
              <h3 className="text-3xl font-bold tracking-tight text-slate-900 mt-2">
                Verified News & Coverage
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="font-bold text-sky-900">Regional Daily Bulletin</span>
                    <span>•</span>
                    <span>Verified Feature</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Tandicia Association Conducts Free Vision Health Camp for Over 100 Beneficiaries
                  </h4>
                </div>
                <span className="text-xs font-semibold text-emerald-800 shrink-0">
                  Archived Bulletin
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="font-bold text-sky-900">Community Health Journal</span>
                    <span>•</span>
                    <span>Field Spotlight</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    Sewa Rasoi: How Volunteer-Driven Community Kitchens Are Supporting Patient Attendants
                  </h4>
                </div>
                <span className="text-xs font-semibold text-emerald-800 shrink-0">
                  Archived Article
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            OFFICIAL SOCIAL MEDIA
            ======================================================== */}
        <section className="py-16 bg-slate-950 text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h3 className="text-2xl font-bold">Connect on Social Media</h3>
            <p className="text-xs text-slate-400">
              Follow our daily field diaries and announcement broadcasts across official handles.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200"
              >
                Facebook
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200"
              >
                YouTube
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

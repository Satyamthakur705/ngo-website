import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getCustomPhotos } from "../utils/photoStore";

const verifiedCamps = [
  {
    id: "camp-delhi-bhati-mines",
    name: "Bhati Mines Free Eye Screening Camp",
    year: "2025",
    location: "Abhyudaya, A-116/A, Sanjay Colony, Bhati Mines, New Delhi - 110074",
    date: "29 August 2025",
    peopleServed: "Verified On-Site Records",
    supportSummary: "नि:शुल्क नेत्र जांच शिविर — On-ground consultation, cataract screening & free eyewear assistance",
    image: "/camps/camp1/1st Camp/E1-4.jpeg",
    objective: "Reaching elderly citizens, daily wage earners, and families in the remote Bhati Mines region with critical eye health diagnosis.",
    medicalTeam: "Dr. Atul Garg, M.B.B.S., M.S. (Eye), Senior Eye Surgeon, Centre for Eyes & Volunteer Specialists",
    volunteers: "Tandicia Association Field Volunteers & Sanjay Colony Youth",
    servicesProvided: "Slit-lamp & fundus evaluation, visual acuity assessment, refractive correction, and eye drop distribution.",
    spectaclesDistributed: "Durable high-grade reading and distance eyeglasses fitted directly on-site.",
    referrals: "Specialist OPD referral slips issued in collaboration with Centre for Eyes.",
    mediaCoverage: "Recorded in village community records and Tandicia field archives.",
    gallery: ["/camps/camp1/1st Camp/E1-4.jpeg", "/camps/camp1/1st Camp/E1-6.jpeg", "/camps/camp1/1st Camp/E1-8.jpeg", "/camps/camp1/1st Camp/E1-3.jpeg", "/camps/camp1/1st Camp/E1-10.jpeg", "/camps/camp1/1st Camp/E1-11.jpeg"]
  },
  {
    id: "camp-delhi-kusumpur",
    name: "Kusumpur Pahari Free Eye Screening & Spectacle Camp",
    year: "2025",
    location: "Sherawali Mata Mandir, Block-C, Kusumpur Pahari, New Delhi",
    date: "14 September 2025",
    peopleServed: "Verified On-Site Records",
    supportSummary: "नि:शुल्क नेत्र जांच शिविर — Free diagnostic checkup, doctor consultation, and prescription spectacles",
    image: "/camps/camp2/2nd Camp/E2-3.jpeg",
    objective: "Delivering primary ophthalmic care and free vision correction directly to residents of Kusumpur Pahari with dignity and care.",
    medicalTeam: "Dr. Atul Garg, M.B.B.S., M.S. (Eye), Senior Eye Surgeon, Centre for Eyes & Volunteer Specialists",
    volunteers: "Tandicia Association Core Team & Community Volunteers",
    servicesProvided: "Acuity testing, refraction, intraocular pressure check, cataract screening, and clinical consultations.",
    spectaclesDistributed: "Custom prescription corrective glasses provided free of cost to verified attendees.",
    referrals: "Identified cataract and advanced ocular cases referred to partner surgical centres for subsidised treatment.",
    mediaCoverage: "Documented in official Tandicia field registers with verified camp photography.",
    gallery: ["/camps/camp2/2nd Camp/E2-3.jpeg", "/camps/camp2/2nd Camp/E2-4.jpeg", "/camps/camp2/2nd Camp/E2-6.jpeg", "/camps/camp2/2nd Camp/E2-7.jpeg", "/camps/camp2/2nd Camp/E2-9.jpeg", "/camps/camp2/2nd Camp/E2-14.jpeg", "/camps/camp2/2nd Camp/E2-15.jpeg", "/camps/camp2/2nd Camp/E2-18.jpeg"]
  },
  {
    id: "camp-faridabad-mewla",
    name: "Mewla Maharajpur Free Eye Screening Camp",
    year: "2025",
    location: "Deepak Bensla Baithak, Near Govt School, Mewla Maharajpur, Faridabad, Haryana",
    date: "12 October 2025",
    peopleServed: "Verified On-Site Records",
    supportSummary: "टेंडिशिया एसोसिएशन की तरफ से निःशुल्क नेत्र जाँच शिविर — Free screening, spectacles, medicines",
    image: "/camps/camp3/3rd camp/E3-3.jpeg",
    objective: "Extending Tandicia's eye care mission to rural Haryana communities with free ophthalmic screening and corrective spectacles.",
    medicalTeam: "Certified Ophthalmologists & Optometry Team",
    volunteers: "Tandicia Association Core Team & Mewla Maharajpur Community Volunteers",
    servicesProvided: "Visual acuity testing, refraction, retinoscopy, spectacle fitting, medicine distribution.",
    spectaclesDistributed: "Free prescription reading and distance glasses.",
    referrals: "Specialist referrals for cataract and complex cases.",
    mediaCoverage: "National Prahari newspaper coverage, radio interview. Documented in Tandicia field archives.",
    gallery: ["/camps/camp3/3rd camp/Banner.jpeg", "/camps/camp3/3rd camp/E3-3.jpeg", "/camps/camp3/3rd camp/E3-5.jpeg", "/camps/camp3/3rd camp/E3-7.jpeg", "/camps/camp3/3rd camp/E3-8.jpeg", "/camps/camp3/3rd camp/E3-10.jpeg", "/camps/camp3/3rd camp/E3-12.jpeg", "/camps/camp3/3rd camp/E3-14.jpeg", "/camps/camp3/3rd camp/F57.jpeg", "/camps/camp3/3rd camp/F98.jpeg"]
  },
  {
    id: "camp-delhi-gb-road",
    name: "GB Road Community Eye Care Outreach",
    year: "2025",
    location: "GB Road, Central Delhi",
    date: "2025",
    peopleServed: "Verified On-Site Records",
    supportSummary: "Targeted vision screening for workers in the GB Road area.",
    image: "/camps/camp2/2nd Camp/E2-14.jpeg",
    objective: "Bringing primary eye care access to underserved urban communities near GB Road.",
    medicalTeam: "Volunteer Eye Specialists",
    volunteers: "Tandicia Field Volunteers",
    servicesProvided: "Eye screening, vision testing, spectacle distribution.",
    spectaclesDistributed: "Free corrective eyewear.",
    referrals: "Partner hospital referrals.",
    mediaCoverage: "Video documented in Tandicia archives.",
    gallery: ["/camps/camp2/2nd Camp/E2-14.jpeg"]
  }
];

export default function EyeCamps() {
  const [filter, setFilter] = useState("All");
  const [selectedCamp, setSelectedCamp] = useState(null);
  const [customCampPhotos, setCustomCampPhotos] = useState(() => 
    getCustomPhotos().filter(p => p.category === "Eye Camps")
  );

  useEffect(() => {
    const handleUpdate = () => {
      setCustomCampPhotos(getCustomPhotos().filter(p => p.category === "Eye Camps"));
    };
    window.addEventListener("tandicia_photos_updated", handleUpdate);
    return () => window.removeEventListener("tandicia_photos_updated", handleUpdate);
  }, []);

  const dynamicCamps = customCampPhotos.map(p => ({
    id: p.id,
    name: p.title,
    year: p.date ? p.date.substring(0, 4) : "2025",
    location: p.location,
    date: p.date,
    peopleServed: "Verified Field Entry",
    supportSummary: p.desc,
    image: p.src,
    objective: p.desc,
    medicalTeam: "Tandicia Healthcare Team & Volunteer Specialists",
    volunteers: "Field Volunteers",
    servicesProvided: "On-site eye checkup, screening, and vision correction assistance.",
    spectaclesDistributed: "Custom prescription corrective glasses.",
    referrals: "Direct partner OPD consultations scheduled for complex eye care.",
    mediaCoverage: "Documented in live Tandicia field register.",
    gallery: [p.src]
  }));

  const allCamps = [...dynamicCamps, ...verifiedCamps];

  const filteredCamps = filter === "All" 
    ? allCamps 
    : filter === "Earlier"
    ? allCamps.filter(c => parseInt(c.year) < 2025)
    : allCamps.filter(c => c.year === filter);

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
              alt="Eye Camp Doctor examining elderly beneficiary"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              Primary Healthcare Initiative
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Eye Camps
            </h1>
            <p className="text-xl sm:text-2xl text-amber-200/90 font-serif mb-6">
              Bringing Vision Closer to Those Who Need It
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Clear vision is not a luxury—it is fundamental to human dignity, safety, and self-reliance. We bring qualified doctors and free spectacles directly to grassroots communities.
            </p>
          </div>
        </section>

        {/* ========================================================
            IMPACT STRIP (Verified Placeholders)
            ======================================================== */}
        <section className="bg-sky-950 text-white py-10 border-b border-sky-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono block">
                  4+
                </span>
                <span className="text-xs sm:text-sm text-slate-200 uppercase tracking-wider font-semibold mt-1 block">
                  Camps Conducted
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono block">
                  XX+
                </span>
                <span className="text-xs sm:text-sm text-slate-200 uppercase tracking-wider font-semibold mt-1 block">
                  People Screened
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-mono block">
                  XX+
                </span>
                <span className="text-xs sm:text-sm text-slate-200 uppercase tracking-wider font-semibold mt-1 block">
                  Spectacles Distributed
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-amber-300 font-mono block">
                  XX+
                </span>
                <span className="text-xs sm:text-sm text-slate-200 uppercase tracking-wider font-semibold mt-1 block">
                  Referrals / Surgeries
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            CAMP ARCHIVE WITH FILTERS
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                  Field Documentation
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                  Our Eye Camps
                </h2>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
                {["All", "2026", "2025", "Earlier"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      filter === f
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Camp Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredCamps.map((camp) => (
                <div
                  key={camp.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col group"
                >
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={camp.image}
                      alt={camp.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                      {camp.year}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                        <span>📍 {camp.location}</span>
                        <span>•</span>
                        <span>📅 {camp.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                        {camp.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {camp.supportSummary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-emerald-800">
                        {camp.peopleServed}
                      </span>
                      <button
                        onClick={() => setSelectedCamp(camp)}
                        className="text-xs font-bold text-sky-900 hover:text-sky-950 underline underline-offset-4 cursor-pointer"
                      >
                        View Camp →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            HUMAN STORY — BEYOND THE NUMBERS
            ======================================================== */}
        <section className="py-20 bg-stone-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/camps/camp3/3rd camp/E3-8.jpeg"
                  alt="Doctor examining elderly patient at eye camp"
                  className="w-full h-full object-cover aspect-4/3"
                />
              </div>
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                  Beyond the Numbers
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  "Now I can read again and hold my granddaughter's hand with confidence."
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  For over two years, 68-year-old Ram Dulari ji suffered from progressive blurry vision. Living on a modest pension, getting an eye checkup in the city meant significant expense and travel.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  At the Tandicia Community Eye Camp, volunteer optometrists conducted a detailed refractive test and provided her with custom eyeglasses free of charge. Today, she has regained her daily independence.
                </p>
                <span className="text-xs font-semibold text-slate-400 block pt-2">
                  Verified Beneficiary Interaction • Tandicia Eye Care Programme
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            FINAL CTA
            ======================================================== */}
        <section className="py-20 bg-slate-950 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block">
              Expand Our Reach
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Help Us Reach More Communities
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              If you are an eye care professional, optometrist, or an organisation with space to host a free screening camp in your locality, join hands with Tandicia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact?interest=Volunteering"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-all"
              >
                Volunteer With Us
              </Link>
              <Link
                to="/contact?interest=Partnership"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================
          CAMP DETAIL MODAL
          ======================================================== */}
      {selectedCamp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSelectedCamp(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-lg font-bold cursor-pointer"
            >
              ✕
            </button>

            <img
              src={selectedCamp.image}
              alt={selectedCamp.name}
              className="w-full h-56 object-cover rounded-2xl mb-6"
            />

            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
              {selectedCamp.year} Camp Record
            </span>

            <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-1">
              {selectedCamp.name}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              📍 {selectedCamp.location} • 📅 {selectedCamp.date}
            </p>

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900">Objective:</h4>
                <p className="text-slate-600">{selectedCamp.objective}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">Medical Team:</h4>
                <p className="text-slate-600">{selectedCamp.medicalTeam}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">Services Provided:</h4>
                <p className="text-slate-600">{selectedCamp.servicesProvided}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">Spectacles Distributed:</h4>
                <p className="text-slate-600">{selectedCamp.spectaclesDistributed}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900">Referrals & Follow-ups:</h4>
                <p className="text-slate-600">{selectedCamp.referrals}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Camp Photographs:</h4>
                <div className="grid grid-cols-3 gap-2">
                  {selectedCamp.gallery.map((img, i) => (
                    <img key={i} src={img} alt="Camp thumbnail" className="w-full h-20 object-cover rounded-xl" />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedCamp(null)}
                className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs cursor-pointer"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

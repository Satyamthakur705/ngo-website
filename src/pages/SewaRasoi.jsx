import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SewaRasoi() {
  const steps = [
    {
      step: "01",
      title: "Prepare",
      desc: "Fresh, hygienic ingredients sourced directly and cooked with purity, devotion, and strict sanitary standards by volunteers.",
      image: "/image copy.png"
    },
    {
      step: "02",
      title: "Serve",
      desc: "Warm meals served with heartfelt respect and dignity—never treating beneficiaries as aid recipients, but as honored guests.",
      image: "/image.png"
    },
    {
      step: "03",
      title: "Connect",
      desc: "Sitting together, listening to stories, and breaking social barriers through the universal bond of shared food and empathy.",
      image: "/public/team/imapct.png"
    }
  ];

  const galleryImages = [
    "/image.png",
    "/image copy.png",
    "/image-copy.png",
    "/gallery/image5.png",
    "/gallery/image6.png",
    "/gallery/image7.png"
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
              src="/image.png"
              alt="Volunteers serving meals at Sewa Rasoi"
              className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
              Nutritional Relief & Dignity
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Sewa Rasoi
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-300 font-serif mb-6">
              Food with Dignity. Service with Compassion.
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              No one should have to sleep on an empty stomach or endure hunger while tending to an ill family member. Sewa Rasoi is our community commitment to ensure wholesome food for all.
            </p>
          </div>
        </section>

        {/* ========================================================
            OUR PURPOSE — MORE THAN A MEAL
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
              The Guiding Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2 mb-6">
              More Than a Meal
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto mb-8 rounded-full" />
            <div className="space-y-5 text-slate-700 text-lg leading-relaxed text-left">
              <p>
                Sewa Rasoi represents service, dignity, human connection, and community participation. It is not just about distributing calories; it is about reassuring people that in their toughest moments, they are not alone.
              </p>
              <p>
                Many attendants who travel from far-off villages to city hospitals spend their last penny on medical treatments, skipping meals themselves. Sewa Rasoi reaches these quiet warriors with hot, wholesome nutrition served with unconditional respect.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            IMPACT STRIP (Verified Figures)
            ======================================================== */}
        <section className="bg-emerald-950 text-white py-12 border-y border-emerald-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <span className="text-3xl sm:text-5xl font-extrabold text-amber-400 font-mono block">
                  XX+
                </span>
                <span className="text-xs sm:text-sm text-emerald-100 uppercase tracking-wider font-semibold mt-2 block">
                  Meals Served
                </span>
                <span className="text-xs text-emerald-400/80 mt-1 block">Fresh & wholesome</span>
              </div>
              <div>
                <span className="text-3xl sm:text-5xl font-extrabold text-white font-mono block">
                  XX+
                </span>
                <span className="text-xs sm:text-sm text-emerald-100 uppercase tracking-wider font-semibold mt-2 block">
                  Volunteers Involved
                </span>
                <span className="text-xs text-emerald-400/80 mt-1 block">Cooking & serving</span>
              </div>
              <div>
                <span className="text-3xl sm:text-5xl font-extrabold text-amber-300 font-mono block">
                  XX+
                </span>
                <span className="text-xs sm:text-sm text-emerald-100 uppercase tracking-wider font-semibold mt-2 block">
                  Days of Service
                </span>
                <span className="text-xs text-emerald-400/80 mt-1 block">Regular field drives</span>
              </div>
              <div>
                <span className="text-3xl sm:text-5xl font-extrabold text-sky-400 font-mono block">
                  XX+
                </span>
                <span className="text-xs sm:text-sm text-emerald-100 uppercase tracking-wider font-semibold mt-2 block">
                  Communities Reached
                </span>
                <span className="text-xs text-emerald-400/80 mt-1 block">Hospital & public hubs</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            HOW IT WORKS (Prepare → Serve → Connect)
            ======================================================== */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Three Pillars of Service
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                How It Works
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                A seamless grassroots process powered completely by compassionate volunteers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3">
                        Phase {s.step}
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {s.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            PEOPLE BEHIND SEWA RASOI
            ======================================================== */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/image-copy.png"
                  alt="Volunteers behind Sewa Rasoi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                  Volunteers & Supporters
                </span>
                <h3 className="text-3xl font-bold text-slate-900">
                  Powered by People
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Sewa Rasoi runs without paid caterers. From slicing vegetables at dawn to stirring the cauldrons and handing plates with a smile, it is our volunteers who infuse each meal with love.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "When you serve someone food with two hands and a warm greeting, you give them more than nourishment—you restore their faith in humanity."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            PHOTO GALLERY
            ======================================================== */}
        <section className="py-20 bg-stone-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Authentic Moments
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Field Photographs
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all h-64 bg-slate-100">
                  <img
                    src={src}
                    alt={`Sewa Rasoi moment ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            JOIN US — SERVE WITH US
            ======================================================== */}
        <section className="py-20 bg-emerald-950 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
              Make a Tangible Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Serve With Us
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Volunteer for a weekend food service shift or support the ration and raw material costs for an upcoming community kitchen.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact?interest=Sewa%20Rasoi"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm transition-all"
              >
                Volunteer
              </Link>
              <Link
                to="/donate"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-all"
              >
                Support Sewa Rasoi
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const location = useLocation();

  const [pathway, setPathway] = useState("Volunteer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "Volunteering",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync pathway and interest with query parameters if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const interestParam = params.get("interest");
    if (interestParam) {
      setFormData(prev => ({ ...prev, interest: interestParam }));
      if (interestParam.toLowerCase().includes("volunteer")) setPathway("Volunteer");
      else if (interestParam.toLowerCase().includes("partner")) setPathway("Partner");
      else setPathway("Support");
    }
  }, [location.search]);

  const handlePathwaySelect = (p, defaultInterest) => {
    setPathway(p);
    setFormData(prev => ({ ...prev, interest: defaultInterest }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              alt="Connect with Tandicia Association"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              Reach Out & Engage
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Let's Connect
            </h1>
            <p className="text-xl sm:text-2xl text-amber-200/90 font-serif mb-6">
              Every connection can become an opportunity to serve.
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you want to offer your time as a volunteer, collaborate on a community eye camp, or simply say hello, we look forward to hearing from you.
            </p>
          </div>
        </section>

        {/* ========================================================
            THREE OPTIONS (Volunteer, Partner, Support)
            ======================================================== */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Option 1: Volunteer */}
              <button
                type="button"
                onClick={() => handlePathwaySelect("Volunteer", "Volunteering")}
                className={`p-6 rounded-3xl border text-left transition-all cursor-pointer ${
                  pathway === "Volunteer"
                    ? "bg-emerald-50/80 border-emerald-700 shadow-md ring-2 ring-emerald-700/20"
                    : "bg-stone-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <span className="text-3xl mb-3 block">🤝</span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Volunteer</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  I want to contribute my time and effort to on-ground camps and initiatives.
                </p>
              </button>

              {/* Option 2: Partner */}
              <button
                type="button"
                onClick={() => handlePathwaySelect("Partner", "Partnership")}
                className={`p-6 rounded-3xl border text-left transition-all cursor-pointer ${
                  pathway === "Partner"
                    ? "bg-sky-50/80 border-sky-800 shadow-md ring-2 ring-sky-800/20"
                    : "bg-stone-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <span className="text-3xl mb-3 block">🏢</span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Partner</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  I want to collaborate with Tandicia as a clinic, hospital, corporate, or institution.
                </p>
              </button>

              {/* Option 3: Support */}
              <button
                type="button"
                onClick={() => handlePathwaySelect("Support", "Supporting Tandicia")}
                className={`p-6 rounded-3xl border text-left transition-all cursor-pointer ${
                  pathway === "Support"
                    ? "bg-amber-50/80 border-amber-600 shadow-md ring-2 ring-amber-600/20"
                    : "bg-stone-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <span className="text-3xl mb-3 block">❤️</span>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Support</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  I want to sponsor eye screening kits, spectacles, or meals for community members.
                </p>
              </button>

            </div>
          </div>
        </section>

        {/* ========================================================
            CONTACT FORM & INFO
            ======================================================== */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Form on Left */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Send a Message
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Fill in your details and our team will get in touch with you shortly.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <span className="text-4xl block">✅</span>
                    <h4 className="text-xl font-bold text-emerald-950">Thank You!</h4>
                    <p className="text-sm text-emerald-800">
                      Your message has been received. A representative from Tandicia Association will connect with you soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2 rounded-full bg-emerald-800 text-white text-xs font-semibold cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          City / Location *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Lucknow, Kanpur"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          I am interested in *
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 text-sm bg-white"
                        >
                          <option value="Volunteering">Volunteering</option>
                          <option value="Eye Camps">Eye Camps</option>
                          <option value="Sewa Rasoi">Sewa Rasoi</option>
                          <option value="Nai Pehal">Nai Pehal</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Supporting Tandicia">Supporting Tandicia</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how you would like to engage or any question you have..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/20 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-sm cursor-pointer"
                    >
                      Send Message →
                    </button>
                  </form>
                )}
              </div>

              {/* Information & Map on Right */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Verified Info */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
                  <h4 className="text-xl font-bold text-slate-900">
                    Contact Information
                  </h4>

                  <div className="space-y-4 text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <span className="text-xl">📍</span>
                      <div>
                        <strong className="block text-slate-900">Registered Office:</strong>
                        <span>Tandicia Association, Lucknow, Uttar Pradesh, India</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-xl">✉️</span>
                      <div>
                        <strong className="block text-slate-900">Email:</strong>
                        <a href="mailto:contact@tandiciaassociation.com" className="text-sky-900 hover:underline">
                          contact@tandiciaassociation.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-xl">🌐</span>
                      <div>
                        <strong className="block text-slate-900">Official Website:</strong>
                        <span className="text-slate-700">tandiciaassociation.com</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                      Social Channels
                    </span>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold">LinkedIn</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold">Instagram</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold">Facebook</span>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 space-y-3">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                    Headquarters
                  </span>
                  <h4 className="text-xl font-bold">Lucknow Hub</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Centrally operating across the state of Uttar Pradesh with mobile teams conducting eye camps and community kitchens in rural and urban nodes.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            FINAL MESSAGE
            ======================================================== */}
        <section className="py-16 bg-white border-t border-slate-200 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              Moving Forward
            </span>
            <p className="text-xl sm:text-2xl font-serif text-slate-900">
              "Let's work together to create a more connected and compassionate community."
            </p>
            <p className="text-xs text-slate-500">
              मित्रता • दोस्ती • अपनापन
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

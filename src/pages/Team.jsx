import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const leadership = [
  {
    name: "Founder & Executive Trustee",
    role: "Leadership & Community Outreach",
    bio: "Dedicated to building compassionate grassroots initiatives rooted in the ethos of Mitrata, Dosti, and Apnapan.",
    image: "/team/team.png"
  },
  {
    name: "Head of Operations & Field Logistics",
    role: "Field Programme Director",
    bio: "Coordinating seamless on-ground camps, supply chains for Sewa Rasoi, and volunteer deployment across districts.",
    image: "/public/team/imapct.png"
  }
];

const medicalTeam = [
  {
    name: "Volunteer Ophthalmologists & Optometrists",
    role: "Clinical Vision Care Team",
    speciality: "Primary Refraction, Glaucoma & Cataract Screening",
    desc: "Qualified eye specialists who dedicate their weekends to examining beneficiaries and ensuring accurate prescription fittings."
  },
  {
    name: "Community Health Consultants",
    role: "Preventative Healthcare Advisors",
    speciality: "General Health, Geriatric Consultation & Nutrition",
    desc: "Physicians providing clinical advice, patient counseling, and medical referral assistance."
  }
];

export default function Team() {
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
              alt="Tandicia Team"
              className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              The Heart of Our Mission
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              The People Behind Tandicia
            </h1>
            <p className="text-xl sm:text-2xl text-amber-200/90 font-serif mb-6">
              People who give their time, expertise and heart to serve the community.
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Tandicia is powered by everyday citizens, professionals, and doctors united by the simple belief that meaningful change begins when we come together.
            </p>
          </div>
        </section>

        {/* ========================================================
            LEADERSHIP
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Guidance & Stewardship
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Leadership
              </h2>
              <div className="w-16 h-1 bg-amber-600 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadership.map((leader, i) => (
                <div key={i} className="rounded-3xl border border-slate-200 p-8 bg-stone-50/50 flex flex-col sm:flex-row gap-6 items-center">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-2xl object-cover shadow-sm shrink-0"
                  />
                  <div>
                    <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block mb-1">
                      {leader.role}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            MEDICAL PROFESSIONALS
            ======================================================== */}
        <section className="py-20 bg-stone-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Healthcare Mentors
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                Medical Professionals
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                Practicing clinicians and optometrists dedicating pro-bono diagnostic care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {medicalTeam.map((doc, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🩺</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{doc.name}</h3>
                      <p className="text-xs text-sky-900 font-semibold">{doc.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 block mb-2">{doc.speciality}</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{doc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            VOLUNTEER COMMUNITY CELEBRATION
            ======================================================== */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-xl">
              <div className="relative z-10 max-w-2xl space-y-5">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold block">
                  The True Backbone
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Celebrating Our Volunteers
                </h3>
                <p className="text-emerald-100 text-base leading-relaxed">
                  Behind every spectacle handed over, every hot meal packed at 6:00 AM, and every comforting hand held, is a Tandicia volunteer. They receive no salaries—their only reward is the warmth of an elder’s blessing and a community made stronger.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact?interest=Volunteering"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm transition-all"
                  >
                    <span>Become a Volunteer</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            PARTNERS & SUPPORTERS
            ======================================================== */}
        <section className="py-20 bg-stone-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block mb-2">
              Allied Together
            </span>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Partners & Supporters
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto mb-10">
              We extend our heartfelt gratitude to local clinics, resident welfare groups, and community donors who stand by Tandicia's initiatives.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                Local Optical Clinics
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                Community Health Workers
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                Resident Welfare Associations
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs font-semibold text-slate-700">
                Individual Philanthropists
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
              Join Our Family
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              You Can Be Part of the Team
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              No previous NGO experience is needed. Bring your empathy, your time, and a desire to help.
            </p>
            <div className="pt-4">
              <Link
                to="/contact?interest=Volunteering"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-sm transition-all"
              >
                Become a Volunteer →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const docCategories = [
  {
    category: "Registration & Legal",
    icon: "📜",
    description: "Official entity incorporation and government legal registration mandates.",
    docs: [
      { name: "Certificate of Incorporation / Registration", year: "2024–25", type: "PDF Official", size: "Verified", note: "Approved for public transparency" },
      { name: "Bylaws & Trust Deed Extract", year: "2024", type: "PDF Official", size: "Verified", note: "Institutional charter" }
    ]
  },
  {
    category: "Statutory Disclosures",
    icon: "⚖️",
    description: "Tax registrations, PAN details, and statutory regulatory compliance certificates.",
    docs: [
      { name: "Permanent Account Number (PAN) Record", year: "Statutory", type: "Official Card", size: "Verified", note: "Central Board of Direct Taxes" },
      { name: "NITI Aayog Darpan NGO Enrolment", year: "2025", type: "Certificate", size: "Verified", note: "Government of India portal recognition" }
    ]
  },
  {
    category: "Programme & Impact Reports",
    icon: "📊",
    description: "Verified field activity summaries, eye camp registries, and annual reviews.",
    docs: [
      { name: "Annual Field Activity Review", year: "2025–26", type: "Annual Report", size: "Verified", note: "Consolidated field metrics" },
      { name: "Comprehensive Eye Care Programme Report", year: "2025", type: "Programme Report", size: "Verified", note: "Detailed screening outcomes" },
      { name: "Sewa Rasoi Nutritional Impact Log", year: "2025", type: "Impact Log", size: "Verified", note: "Community kitchen distribution logs" }
    ]
  },
  {
    category: "Institutional Partnerships & MoUs",
    icon: "🤝",
    description: "Memorandums of Understanding with medical partners and community centres.",
    docs: [
      { name: "Ophthalmic Referral Partnership Agreement", year: "2025", type: "Institutional MoU", size: "Verified", note: "Hospital surgical referral framework" },
      { name: "Community Centre Space Utilization Charter", year: "2025", type: "Agreement", size: "Verified", note: "Diagnostic camp venues" }
    ]
  }
];

export default function Documents() {
  const [activeModalDoc, setActiveModalDoc] = useState(null);

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
              src="/gallery/image8.png"
              alt="Transparency and governance"
              className="w-full h-full object-cover filter brightness-[0.32] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              Governance & Integrity
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Documents & Transparency
            </h1>
            <p className="text-xl sm:text-2xl text-amber-200/90 font-serif mb-6">
              Building Trust Through Openness and Accountability
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Public service demands unconditional honesty. We publish verified registration records, regulatory certificates, and programme summaries for all community stakeholders.
            </p>
          </div>
        </section>

        {/* ========================================================
            DOCUMENT CATEGORIES & CARDS
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {docCategories.map((cat, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{cat.category}</h2>
                    <p className="text-xs text-slate-500 mt-0.5">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.docs.map((doc, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-6 rounded-3xl border border-slate-200 bg-stone-50/60 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                          <span className="font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                            {doc.year}
                          </span>
                          <span className="text-slate-400">{doc.type}</span>
                        </div>
                        <div className="flex items-start gap-3 mt-3">
                          <span className="text-2xl shrink-0">📄</span>
                          <div>
                            <h3 className="text-base font-bold text-slate-900">{doc.name}</h3>
                            <p className="text-xs text-slate-500 mt-1">{doc.note}</p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                        <span className="text-xs font-semibold text-emerald-800">
                          Status: Verified Record
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setActiveModalDoc(doc)}
                            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-950 bg-sky-100 hover:bg-sky-200 transition-colors cursor-pointer"
                          >
                            View Summary
                          </button>
                          <button
                            onClick={() => setActiveModalDoc(doc)}
                            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors cursor-pointer"
                          >
                            Request Copy
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            TRANSPARENCY FOOTNOTE
            ======================================================== */}
        <section className="py-12 bg-stone-100 border-t border-slate-200 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
              "Documents and information published on this page are provided for transparency and public information. Tandicia Association adheres strictly to statutory disclosures approved by the board of trustees."
            </p>
          </div>
        </section>
      </main>

      {/* DOCUMENT PREVIEW MODAL */}
      {activeModalDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setActiveModalDoc(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center text-lg font-bold cursor-pointer"
            >
              ✕
            </button>

            <span className="text-3xl mb-4 block">📜</span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
              Verified Public Record
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-2">
              {activeModalDoc.name}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Category: {activeModalDoc.type} • Reference Period: {activeModalDoc.year}
            </p>

            <div className="p-4 rounded-2xl bg-stone-50 border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2 mb-6">
              <p><strong>Verification Note:</strong> {activeModalDoc.note}</p>
              <p>This statutory record has been cataloged under Tandicia Association's official compliance archives in accordance with non-profit disclosure guidelines.</p>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalDoc(null)}
                className="px-5 py-2 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                Close
              </button>
              <a
                href="mailto:contact@tandiciaassociation.com?subject=Document%20Request:%20"
                className="px-5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-white"
              >
                Request Official Copy
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Donate() {
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
              src="/donate.png"
              alt="Support Tandicia Association"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
              Transparent Contributions
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
              Support Our Work
            </h1>
            <p className="text-xl sm:text-2xl text-amber-200/90 font-serif mb-6">
              Invest in someone's vision and dignity, your way.
            </p>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Your contribution directly supports on-site eye diagnosis camps, free corrective spectacles, and wholesome meals via Sewa Rasoi.
            </p>
          </div>
        </section>

        {/* ========================================================
            DONATION OPTIONS & BANK DETAILS
            ======================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                Transparent Giving
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
                No Pressure. Just Real Community Care.
              </h2>
              <p className="text-slate-600 text-sm mt-3">
                100% of voluntary public donations are utilized toward direct field medicines, frames, and food rations.
              </p>
            </div>

            <div className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* QR Code on Left */}
              <div className="lg:col-span-5 flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <img
                  src="/qr.png"
                  alt="UPI QR Code - Tandicia Association"
                  className="w-full max-w-xs object-contain mb-4 hover:scale-105 transition-transform"
                />
                <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full mb-1">
                  Scan via any UPI App (GPay / PhonePe / Paytm / BHIM)
                </span>
                <p className="text-xs text-slate-500 mt-1">Official verified merchant QR code</p>
              </div>

              {/* Bank Details on Right */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Official Bank Transfer (NEFT / RTGS / IMPS)
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Direct account deposits are handled via our registered non-profit institutional bank account:
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-sm">
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Account Name:</span>
                    <strong className="text-slate-900 font-semibold">Tandicia Association</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Bank Name:</span>
                    <strong className="text-slate-900 font-semibold">City Union Bank Ltd (CUB)</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Account Number:</span>
                    <strong className="text-slate-900 font-mono font-bold text-base">510909010308848</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">IFSC Code:</span>
                    <strong className="text-slate-900 font-mono font-bold text-base">CIUB0000102</strong>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xl sm:text-2xl font-bold text-emerald-800 block">100%</span>
                    <span className="text-xs text-slate-500 mt-1 block">Programme Care</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xl sm:text-2xl font-bold text-sky-900 block">Verified</span>
                    <span className="text-xs text-slate-500 mt-1 block">Field Receipts</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <span className="text-xl sm:text-2xl font-bold text-amber-700 block">Dignity</span>
                    <span className="text-xs text-slate-500 mt-1 block">Zero Demeaning Aid</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500">
                  After initiating a bank transfer, you may optionally email your transaction reference to{" "}
                  <a href="mailto:contact@tandiciaassociation.com" className="text-sky-900 font-semibold hover:underline">
                    contact@tandiciaassociation.com
                  </a>{" "}
                  for receipt and acknowledgment.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            SUPPORT OTHER WAYS
            ======================================================== */}
        <section className="py-16 bg-stone-100 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Prefer to Contribute Time or Services?
            </h3>
            <p className="text-sm text-slate-600">
              You don’t have to donate money to make a difference. We warmly welcome optometrists, teachers, drivers, and field volunteers.
            </p>
            <div className="pt-2">
              <Link
                to="/contact?interest=Volunteering"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold"
              >
                Join as Volunteer →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
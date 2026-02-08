import {
  announcements,
  dashboardStats,
  reports,
  stallCategories,
  stalls,
  vendors
} from './data/marketData';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'directory', label: 'Directory' },
  { id: 'vendors', label: 'Vendors' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'announcements', label: 'Announcements' },
  { id: 'report', label: 'Report' },
  { id: 'admin', label: 'Admin (Demo)' }
];

const DemoTag = ({ className = '' }) => (
  <span
    className={`inline-flex items-center gap-2 rounded-full bg-market-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-market-accent ${className}`}
  >
    Demo / Prototype
  </span>
);

const SectionHeading = ({ title, subtitle }) => (
  <div className="flex flex-col gap-2">
    <div className="flex flex-wrap items-center gap-3">
      <h2 className="text-2xl font-semibold text-market-dark">{title}</h2>
      <DemoTag />
    </div>
    <p className="text-sm text-slate-600 max-w-2xl">{subtitle}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-market-light text-slate-900">
      <header id="home" className="relative overflow-hidden bg-market-dark text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(27,127,90,0.6),_transparent_70%)]" />
        </div>
        <nav className="relative z-10 mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-market-accent">Ibrahim Gaidam Ultra-Modern Market</p>
            <h1 className="text-xl font-semibold">Damaturu Modern Market</h1>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="hover:text-market-accent">
                {section.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 text-sm text-white/70 sm:flex">
              <span>🔔</span>
              <span>👤</span>
              <span>🛡️</span>
            </div>
            <DemoTag className="bg-white/10 text-white" />
          </div>
        </nav>
        <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-6 pb-16 pt-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-market-accent">Digital Platform (Demo)</p>
            <h2 className="text-4xl font-semibold leading-tight">
              Damaturu Modern Market – Digital Platform (Demo)
            </h2>
            <p className="text-base text-white/80">
              A concept prototype showcasing a connected marketplace for traders, customers, and investors. Organized stall
              directories, real-time announcements, and community reporting tools help keep commerce structured, secure, and
              investor-ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-market-accent px-6 py-3 text-sm font-semibold text-white shadow-soft">
                Explore Stalls
              </button>
              <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white">
                View Vendors
              </button>
            </div>
            <div className="rounded-3xl bg-white/10 p-4 text-sm text-white/80">
              <p className="font-semibold text-white">Market Vision</p>
              <p className="mt-2">
                Organized stalls, secure walkways, and digital visibility designed to attract investors and elevate local
                commerce in Damaturu.
              </p>
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-6 text-slate-900">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-market-accent">Market Snapshot</p>
              <DemoTag />
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-white p-4 shadow">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Today’s Activity</p>
                <p className="mt-2 text-2xl font-semibold text-market-dark">6,420 Visitors</p>
                <p className="text-sm text-slate-500">Peak time: 10:30 AM – 1:00 PM</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Safety & Facilities</p>
                <p className="mt-2 text-lg font-semibold text-market-dark">Security patrols · CCTV · Clean aisles</p>
                <p className="text-sm text-slate-500">Weekly sanitation drills scheduled.</p>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="/market-hero.svg"
                  alt="Illustration of Damaturu Modern Market facilities"
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
        <section id="directory" className="flex flex-col gap-8">
          <SectionHeading
            title="Stall Directory"
            subtitle="Browse organized stalls with category filters, market locations, and demo contact details."
          />
          <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 px-4 py-2">
                <span className="text-slate-400">🔍</span>
                <input
                  className="w-full bg-transparent text-sm outline-none"
                  placeholder="Search stalls, products, or locations"
                />
              </div>
              <select className="rounded-full border border-slate-200 px-4 py-2 text-sm">
                {stallCategories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
              <select className="rounded-full border border-slate-200 px-4 py-2 text-sm">
                <option>Open Now</option>
                <option>Closed</option>
              </select>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {stalls.map((stall) => (
                <div key={stall.name} className="rounded-2xl border border-slate-100 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-market-dark">{stall.name}</h3>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        stall.status === 'Open'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {stall.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{stall.category}</p>
                  <div className="mt-4 flex flex-col gap-2 text-sm text-slate-500">
                    <p>📍 {stall.location}</p>
                    <p>☎ {stall.contact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="vendors" className="flex flex-col gap-8">
          <SectionHeading
            title="Vendor Profiles"
            subtitle="Verified vendor cards with product highlights, ratings, and demo contact tools."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {vendors.map((vendor) => (
              <div key={vendor.name} className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-market-accent/20 text-xl">👩🏽‍💼</div>
                  <div>
                    <p className="text-base font-semibold text-market-dark">{vendor.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{vendor.stall}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">{vendor.category}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-500">
                  {vendor.products.map((product) => (
                    <li key={product}>{product}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <p className="font-semibold text-market-dark">⭐ {vendor.rating} ({vendor.reviews})</p>
                  <button className="rounded-full border border-market-accent px-4 py-2 text-xs font-semibold text-market-accent">
                    Chat (Demo)
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="flex flex-col gap-8">
          <SectionHeading
            title="Market Gallery (Demo)"
            subtitle="Visual highlights inspired by the new ultra-modern market facilities in Damaturu."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { src: '/market-gallery-1.svg', label: 'Main entrance & facade' },
              { src: '/market-gallery-2.svg', label: 'Covered walkways and stalls' },
              { src: '/market-gallery-3.svg', label: 'Administrative block & plaza' }
            ].map((image) => (
              <div key={image.src} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <img src={image.src} alt={image.label} className="h-48 w-full object-cover" />
                <div className="px-4 py-3 text-sm text-slate-600">{image.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="announcements" className="flex flex-col gap-8">
          <SectionHeading
            title="Market Announcements"
            subtitle="Official updates, trading schedules, and community events in one place."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {announcements.map((note) => (
              <div key={note.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-market-accent">{note.date}</p>
                <h3 className="mt-3 text-lg font-semibold text-market-dark">{note.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{note.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="report" className="flex flex-col gap-8">
          <SectionHeading
            title="Complaint & Report System"
            subtitle="Share sanitation, security, or facility issues with the management team."
          />
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <form className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="grid gap-4">
                <label className="text-sm font-semibold text-market-dark">
                  Category
                  <select className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm">
                    <option>Sanitation</option>
                    <option>Security</option>
                    <option>Stall issue</option>
                    <option>Infrastructure</option>
                  </select>
                </label>
                <label className="text-sm font-semibold text-market-dark">
                  Description
                  <textarea
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                    rows="4"
                    placeholder="Describe the issue or request..."
                  />
                </label>
                <label className="text-sm font-semibold text-market-dark">
                  Upload evidence (demo only)
                  <input type="file" className="mt-2 w-full text-sm" />
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-market-dark px-6 py-3 text-sm font-semibold text-white"
                >
                  Submit Report
                </button>
                <p className="text-xs text-slate-500">
                  Thanks for keeping Damaturu Modern Market safe — this is a demo form and does not submit real data.
                </p>
              </div>
            </form>
            <div className="rounded-3xl border border-dashed border-market-accent/40 bg-market-accent/5 p-6">
              <h3 className="text-lg font-semibold text-market-dark">Response Center (Demo)</h3>
              <p className="mt-2 text-sm text-slate-600">
                Reports are triaged in under 24 hours with automated alerts to sanitation and security teams.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <p>✅ Incident number generated immediately.</p>
                <p>🛡️ Security escalation for priority cases.</p>
                <p>📞 Call center support: +234 800 123 4567.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="admin" className="flex flex-col gap-8">
          <SectionHeading
            title="Admin Dashboard (Mock)"
            subtitle="A demo administrator view for operational oversight, analytics, and issue tracking."
          />
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-market-accent">Admin Login</p>
              <div className="mt-4 grid gap-3">
                <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm" placeholder="Admin email" />
                <input
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                  placeholder="Password"
                  type="password"
                />
                <button className="rounded-full bg-market-accent px-6 py-3 text-sm font-semibold text-white">
                  Sign In (Demo)
                </button>
                <p className="text-xs text-slate-500">Use any credentials — demo only.</p>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-market-dark">Operational Overview</p>
                <DemoTag />
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {dashboardStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-market-light p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-market-dark">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <p className="text-sm font-semibold text-market-dark">Issue Tracker</p>
                <div className="mt-3 space-y-2 text-sm">
                  {reports.map((report) => (
                    <div key={report.issue} className="flex items-center justify-between rounded-2xl border border-slate-100 px-4 py-2">
                      <p className="text-slate-600">{report.issue}</p>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          report.status === 'Resolved'
                            ? 'bg-emerald-100 text-emerald-700'
                            : report.status === 'Pending'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {report.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-market-dark p-4 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-market-accent">Analytics (Demo)</p>
                  <p className="mt-2 text-sm text-white/80">Weekly footfall +18% · Vendor satisfaction 92%</p>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                    {['Mon', 'Wed', 'Fri'].map((day) => (
                      <div key={day} className="rounded-full bg-white/10 px-2 py-1">
                        {day}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-center text-sm text-slate-500">
          <DemoTag />
          <p>
            Concept prototype for Ibrahim Gaidam Ultra-Modern Market, Damaturu, Yobe State, Nigeria. All data shown is
            fictional and for demonstration purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
}

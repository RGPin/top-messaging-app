import { Link } from "react-router";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-full md:w-96 border-r border-slate-700 bg-slate-900 text-slate-100">
      {/* Navigation Rail */}
      <nav className="flex flex-col items-center justify-between w-16 py-4 border-r border-slate-700 bg-slate-900 shrink-0">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600 font-bold text-lg text-white shadow-md shadow-slate-700">
            M
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to={"/"}
              className="p-2.5 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
              title="Profile"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20c.8-3.4 3.1-5 7-5s6.2 1.6 7 5" />
              </svg>
            </Link>

            <Link
              to={"/"}
              className="relative p-2.5 rounded-xl text-indigo-500 bg-indigo-500/10 transition-colors"
              title="Messages"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M20 11.5a7.5 7.5 0 0 1-7.8 7.5 8.2 8.2 0 0 1-3.3-.7L4 20l1.4-4A7.3 7.3 0 0 1 4.5 12 7.5 7.5 0 0 1 12 4.5 7.5 7.5 0 0 1 20 11.5Z" />
              </svg>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500" />
            </Link>

            <Link
              to={"/"}
              className="p-2.5 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
              title="Friends"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="9" cy="8" r="3" />
                <path d="M3.5 19c.6-3.1 2.4-4.6 5.5-4.6s4.9 1.5 5.5 4.6" />
                <path d="M16 6.5a2.7 2.7 0 0 1 0 5.3" />
                <path d="M17 14.5c2.2.4 3.5 1.8 4 4" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-100">
          JD
        </div>
      </nav>

      {/* Conversation Panel */}
      <section className="flex flex-col flex-1 min-w-0 bg-slate-900">
        <header className="p-4 border-b border-slate-700 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-slate-100">Messages</h1>
            <button
              className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
              title="New message"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>

          <div className="relative flex items-center">
            <svg
              className="absolute left-3 w-4 h-4 text-slate-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 5 5" />
            </svg>
            <input
              type="search"
              placeholder="Search conversations..."
              className="w-full pl-9 pr-4 py-2 bg-slate-800 text-slate-100 placeholder-slate-500 rounded-xl border border-slate-700 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </header>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-indigo-500/10 border border-slate-700 text-left transition-colors">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-slate-100 font-medium text-sm shrink-0">
              SC
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold text-slate-100 truncate">
                  Sarah Chen
                </span>
                <span className="text-xs text-slate-400 shrink-0">2m</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs text-slate-400 truncate">
                  That sounds great! See you tomorrow.
                </p>
                <span className="flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-indigo-600 text-[10px] font-bold text-slate-100 shrink-0">
                  2
                </span>
              </div>
            </div>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 text-left transition-colors">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-slate-100 font-medium text-sm shrink-0">
              MJ
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-100 truncate">
                  Marcus Johnson
                </span>
                <span className="text-xs text-slate-500 shrink-0">1h</span>
              </div>
              <p className="text-xs text-slate-400 truncate">
                Did you finish the presentation?
              </p>
            </div>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 text-left transition-colors">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-slate-100 font-medium text-sm shrink-0">
              ER
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-100 truncate">
                  Emily Rodriguez
                </span>
                <span className="text-xs text-slate-500 shrink-0">3h</span>
              </div>
              <p className="text-xs text-slate-400 truncate">
                I sent you the files yesterday.
              </p>
            </div>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 text-left transition-colors">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-medium text-sm shrink-0">
              AM
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-slate-900" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-100 truncate">
                  Alex Morgan
                </span>
                <span className="text-xs text-slate-500 shrink-0">
                  Yesterday
                </span>
              </div>
              <p className="text-xs text-slate-400 truncate">
                Let's grab coffee sometime!
              </p>
            </div>
          </button>

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 text-left transition-colors">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-100 border border-slate-700 font-medium text-sm shrink-0">
              DT
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-100 truncate">
                  Design Team
                </span>
                <span className="text-xs text-slate-500 shrink-0">Mon</span>
              </div>
              <p className="text-xs text-slate-400 truncate">
                Mike: Updated the dashboard mockups.
              </p>
            </div>
          </button>
        </div>
      </section>
    </aside>
  );
}

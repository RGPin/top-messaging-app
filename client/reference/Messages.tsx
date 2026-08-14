export default function Messages() {
  return (
    <main className="md:flex flex-col flex-1 h-screen bg-slate-950 text-slate-100 hidden">
      {/* Chat Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-700 shrink-0">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            title="Back"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 font-medium text-sm text-slate-100 shrink-0">
            SC
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-100">
              Sarah Chen
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Online</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            className="hidden sm:flex p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            title="Search messages"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 5 5" />
            </svg>
          </button>

          <button
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
            title="More options"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="5" cy="12" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </header>

      {/* Messages */}
      <section className="flex-1 overflow-y-auto p-6 space-y-4">
        {/* Date Divider */}
        <div className="flex items-center justify-center my-4">
          <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-slate-400 shadow-slate-700 shadow-sm">
            Today
          </span>
        </div>

        {/* Received Message */}
        <div className="flex justify-start">
          <div className="max-w-[80%] sm:max-w-[70%] rounded-2xl rounded-tl-sm px-4 py-3 bg-slate-800 border border-slate-700 text-slate-100 shadow-slate-700 shadow-sm">
            <div className="text-xs font-semibold text-indigo-400 mb-1">
              Sarah
            </div>
            <p className="text-sm leading-relaxed">
              Hey! Are we still on for tomorrow?
            </p>
            <div className="mt-1 text-right text-[10px] text-slate-500">
              2:34 PM
            </div>
          </div>
        </div>

        {/* Own Message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] sm:max-w-[70%] rounded-2xl rounded-tr-sm px-4 py-3 bg-indigo-600 text-slate-100 shadow-slate-700 shadow-sm">
            <p className="text-sm leading-relaxed">
              Absolutely! What time works best for you?
            </p>
            <div className="mt-1 text-right text-[10px] text-slate-100/70">
              2:35 PM
            </div>
          </div>
        </div>

        {/* Received Message */}
        <div className="flex justify-start">
          <div className="max-w-[80%] sm:max-w-[70%] rounded-2xl rounded-tl-sm px-4 py-3 bg-slate-800 border border-slate-700 text-slate-100 shadow-slate-700 shadow-sm">
            <p className="text-sm leading-relaxed">
              How about around 10:30? I know a nice coffee place near the
              office.
            </p>
            <div className="mt-1 text-right text-[10px] text-slate-500">
              2:36 PM
            </div>
          </div>
        </div>

        {/* Own Message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] sm:max-w-[70%] rounded-2xl rounded-tr-sm px-4 py-3 bg-indigo-600 text-slate-100 shadow-slate-700 shadow-sm">
            <p className="text-sm leading-relaxed">
              10:30 works perfectly. Send me the location when you get a chance.
            </p>
            <div className="mt-1 text-right text-[10px] text-slate-100/70">
              2:37 PM
            </div>
          </div>
        </div>

        {/* Received Message */}
        <div className="flex justify-start">
          <div className="max-w-[80%] sm:max-w-[70%] rounded-2xl rounded-tl-sm px-4 py-3 bg-slate-800 border border-slate-700 text-slate-100 shadow-slate-700 shadow-sm">
            <p className="text-sm leading-relaxed">
              That sounds great! See you tomorrow. 👋
            </p>
            <div className="mt-1 text-right text-[10px] text-slate-500">
              2:38 PM
            </div>
          </div>
        </div>
      </section>

      {/* Composer */}
      <footer className="p-4 bg-slate-900 border-t border-slate-700 shrink-0">
        <form className="flex items-center gap-3 max-w-4xl mx-auto">
          <textarea
            rows={1}
            placeholder="Write a message..."
            className="flex-1 px-4 py-2.5 bg-slate-800 text-slate-100 placeholder-slate-500 rounded-xl border border-slate-700 text-sm focus:outline-none focus:border-indigo-500 resize-none transition-colors"
          />
          <button
            type="submit"
            title="Send message"
            className="flex items-center justify-center p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-slate-100 transition-colors shadow-slate-700 shadow-sm shrink-0"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </form>
      </footer>
    </main>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-600 to-sky-500 px-6 py-16 text-zinc-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_55%)]" />
      <main className="relative z-10 flex w-full max-w-4xl flex-col gap-12 rounded-3xl border border-white/10 bg-white/10 p-12 shadow-2xl backdrop-blur">
        <section className="flex flex-col gap-4">
          <p className="text-lg font-medium text-white/70">پیام خوش‌آمد</p>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            سلام، خوبی؟ خوش اومدی به فضای کوچیک ما!
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            این صفحه‌ی ساده برای خوش‌آمدگویی به تو ساخته شده. امیدوارم هر جا که
            هستی حالت عالی باشه و روز خوبی جلوی روت باشه.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="flex flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold">چطور می‌گذره؟</h2>
            <p className="text-white/80">
              اگه بخوام کوتاه بگم، همه‌چیز روبه‌راهه. اینجا داریم فضای مثبتی درست
              می‌کنیم که حال دل رو بهتر کنه و یه مکث خوب وسط روز داشته باشیم.
            </p>
          </article>
          <article className="flex flex-col gap-3 rounded-2xl border border-white/20 bg-black/30 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold">جواب کوتاه</h2>
            <p className="text-3xl font-bold text-emerald-300">
              خیلی ممنون، من عالی‌ام! 🌟
            </p>
            <p className="text-white/80">
              تو هم امیدوارم عالی باشی. اگر هم نه، از همین جا یه انرژی خوب برات
              می‌فرستم.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-white/20 bg-white/10 p-6 text-sm text-white/70">
          <p>
            این پروژه با Next.js و Tailwind CSS ساخته شده و به راحتی روی Vercel
            قابل میزبانی است. برای شروع بهتر با همدیگه، دکمه زیر رو بزن تا
            نسخه‌ انگلیسی پیام رو هم ببینی.
          </p>
          <div className="mt-4">
            <TranslationToggle />
          </div>
        </section>
      </main>
    </div>
  );
}

function TranslationToggle() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-white/20 bg-black/40 p-4 text-base">
      <p className="font-semibold text-white/80">English Translation</p>
      <p className="text-white/70">
        Hi! I&apos;m doing great. Welcome to this little space on the web, and I
        hope your day goes just as well as you deserve.
      </p>
    </div>
  );
}

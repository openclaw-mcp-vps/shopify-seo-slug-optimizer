export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify SEO Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-fix Shopify Product URLs{" "}
          <span className="text-[#58a6ff]">for Better SEO</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Scan your entire Shopify catalog, detect broken slugs, remove stop
          words, eliminate duplicates, and publish clean URLs — all in one click.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">
          Cancel anytime. Works with any Shopify plan.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {[
            "Bulk URL Optimization",
            "Stop Word Removal",
            "Duplicate Keyword Fix",
            "Preview Before Publish",
            "One-click Rollback",
            "Shopify API Integration"
          ].map((f) => (
            <span
              key={f}
              className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">
            Pro Plan
          </p>
          <div className="text-5xl font-extrabold text-white mb-1">
            $12
            <span className="text-xl font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#6e7681] text-sm mb-6">Everything you need to rank higher</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited product scans",
              "Bulk slug optimization",
              "Preview & rollback",
              "Shopify OAuth integration",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Start Optimizing
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does it connect to my Shopify store?",
              a: "We use Shopify's official OAuth flow. You authorize the app once and we securely access your product catalog — no passwords stored."
            },
            {
              q: "Will changing URLs break my existing links?",
              a: "Shopify automatically creates 301 redirects when you update a product handle, so your SEO equity and existing backlinks are preserved."
            },
            {
              q: "Can I undo changes after optimizing?",
              a: "Yes. Every optimization session is saved as a snapshot. You can preview changes before applying them and roll back with one click at any time."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        © {new Date().getFullYear()} Shopify SEO Slug Optimizer. All rights reserved.
      </footer>
    </main>
  );
}

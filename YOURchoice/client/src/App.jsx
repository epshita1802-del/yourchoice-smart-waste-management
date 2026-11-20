import React from "react"

function App() {
  return (
    <div className="min-h-screen bg-[#f7faf5] text-[#183b2b]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 md:px-16">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-xl text-white">
            🌱
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            YOUR<span className="text-green-600">Choice</span>
          </h1>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="hover:text-green-600">Features</a>
          <a href="#ai" className="hover:text-green-600">AI Assistant</a>
          <a href="#about" className="hover:text-green-600">About</a>
        </div>

        <button className="rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-800">
          Get Started →
        </button>
      </nav>

      {/* Hero */}
      <section className="grid items-center gap-12 px-8 py-16 md:grid-cols-2 md:px-16 md:py-24">
        <div>
          <span className="mb-6 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
            ♻️ Smart technology for a cleaner tomorrow
          </span>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            A cleaner city
            <br />
            starts with <span className="text-green-600">YOUR</span>
            <br />
            choice.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Making waste management smarter through AI, citizen
            participation, and responsible waste segregation.
            Together, let's build cleaner communities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-green-200 hover:bg-green-800">
              Explore YOURChoice →
            </button>

            <button className="rounded-full border border-green-200 bg-white px-7 py-3.5 font-semibold hover:bg-green-50">
              Discover how it works
            </button>
          </div>

          <div className="mt-10 flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-700">AI-Powered</h3>
              <p className="text-sm text-gray-500">Waste identification</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-700">Community</h3>
              <p className="text-sm text-gray-500">Driven cleanliness</p>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative">
          <div className="rounded-[2rem] bg-[#dcebd9] p-8 md:p-12">
            <div className="rounded-3xl bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">YOURChoice AI</p>
                  <h2 className="text-xl font-bold">Waste Scanner</h2>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-2 text-green-700">
                  ✨ AI
                </span>
              </div>

              <div className="mt-6 flex min-h-52 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-green-300 bg-green-50">
                <span className="text-6xl">📸</span>
                <p className="mt-4 font-semibold">Scan your waste</p>
                <p className="text-sm text-gray-500">
                  Identify • Sort • Recycle
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-green-50 p-3 text-center">
                  <span className="text-2xl">🥬</span>
                  <p className="mt-1 text-sm font-medium">Wet</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-center">
                  <span className="text-2xl">🧴</span>
                  <p className="mt-1 text-sm font-medium">Dry</p>
                </div>
                <div className="rounded-xl bg-orange-50 p-3 text-center">
                  <span className="text-2xl">🔋</span>
                  <p className="mt-1 text-sm font-medium">Special</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white p-4 shadow-lg md:-left-8">
            <p className="text-sm font-semibold">🌍 Make an impact</p>
            <p className="text-xs text-gray-500">One small choice at a time</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 py-20 md:px-16">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-widest text-green-600">
            Our vision
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Technology with a purpose
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            One platform connecting people, waste management, and smarter cities.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon="🤖"
            title="AI Waste Assistant"
            description="Scan waste to identify its category, recyclability, disposal method, and reuse ideas."
          />
          <FeatureCard
            icon="📍"
            title="Report & Track"
            description="Report garbage issues, upload evidence, and track complaints transparently."
          />
          <FeatureCard
            icon="🌍"
            title="Cleaner Communities"
            description="Connect citizens, sanitation workers, and authorities to improve local cleanliness."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-100 px-8 py-8 text-center md:px-16">
        <p className="font-semibold">
          🌱 YOURChoice
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Your Choice. Your City. Your Responsibility.
        </p>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-3xl border border-green-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-3xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-gray-600">
        {description}
      </p>
    </div>
  )
}

export default App
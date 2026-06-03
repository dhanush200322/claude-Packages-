import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>UI/UX Pro Max — Landing</title>
        <meta name="description" content="Premium landing page scaffold" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Hero />

        <section id="features" className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold">Fast Setup</h3>
              <p className="text-sm text-gray-600 mt-2">Next.js + Tailwind + Framer Motion</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold">Responsive</h3>
              <p className="text-sm text-gray-600 mt-2">Adaptive layouts across devices</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold">Accessible</h3>
              <p className="text-sm text-gray-600 mt-2">WCAG-minded components and focus states</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

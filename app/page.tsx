import Navigation from './components/Navigation'

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bring Your Ideas to Life
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Professional 3D printing services for every need — from replacement parts to custom designs.
        </p>
      </div>

      {/* Two Clear Paths */}
      <Navigation />

      {/* Design Help Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">No Design? No Problem!</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Design From Scratch</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>✓ Professional CAD modeling</li>
                <li>✓ Expert design consultation</li>
                <li>✓ Before/after examples</li>
                <li>✓ Flat or hourly rates available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Try Tinkercad</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Create your first 3D model with our free Tinkercad integration.
              </p>
              <a
                href="/tinkercad"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Try Tinkercad →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Package Pricing */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Simple Package Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Basic Print</h3>
            <p className="text-3xl font-bold mb-4">$15</p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>✓ Up to 10cm size</li>
              <li>✓ PLA material</li>
              <li>✓ Single color</li>
              <li>✓ Standard finish</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border-2 border-blue-500">
            <h3 className="text-xl font-bold mb-2">Strong & Durable</h3>
            <p className="text-3xl font-bold mb-4">$25</p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>✓ Up to 15cm size</li>
              <li>✓ PETG or ABS</li>
              <li>✓ Enhanced strength</li>
              <li>✓ Weather resistant</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Premium Custom</h3>
            <p className="text-3xl font-bold mb-4">$40+</p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>✓ CAD design included</li>
              <li>✓ Premium materials</li>
              <li>✓ Multiple colors</li>
              <li>✓ Priority support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

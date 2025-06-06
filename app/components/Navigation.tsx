'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">I Have a File or Know What I Want</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Ready to get started? Upload your file or request a quote for your project.
        </p>
        <Link
          href="/quote"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition inline-block"
        >
          Get a Quote
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">I'm Not Sure Where to Start</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Let us guide you through the process with our simple wizard.
        </p>
        <Link
          href="/wizard"
          className="bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:bg-green-700 transition inline-block"
        >
          Start Guided Process
        </Link>
      </div>
    </div>
  )
} 
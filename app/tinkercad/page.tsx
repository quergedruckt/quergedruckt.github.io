'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function TinkercadPage() {
  const router = useRouter()

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Create Your First 3D Model</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <ol className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                <span>Create a free Tinkercad account or sign in</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                <span>Start with basic shapes and combine them</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                <span>Use the ruler tool to set exact dimensions</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                <span>Export your design as an STL file</span>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our team can help you refine your design or create it from scratch.
            </p>
            <button
              onClick={() => router.push('/quote')}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Design Help
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <iframe
            src="https://www.tinkercad.com/embed/start"
            className="w-full aspect-video rounded-lg"
            allowFullScreen
          />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Tinkercad is a free, easy-to-use web app for 3D design
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => router.back()}
          className="text-blue-600 hover:text-blue-700"
        >
          ← Back
        </button>
      </div>
    </div>
  )
} 
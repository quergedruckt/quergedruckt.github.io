'use client'

import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function QuoteRequestForm() {
  const form = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.current) return

    emailjs.sendForm(
        'service_tasyrmc',        // Your Service ID
        'template_qs8w427',       // Your Template ID
        form.current,
        'xYjqdIkrDUAy950MK'         // Your Public Key
      )
      .then(() => {
        setSubmitted(true)
        form.current?.reset()
      })
      .catch(() => {
        setError(true)
      })
  }

  return (
    <div className="max-w-xl mx-auto mt-12 bg-white dark:bg-gray-900 p-8 rounded-xl shadow space-y-6">
      {submitted && (
        <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 px-4 py-3 rounded">
          ✅ Thank you! We'll get back to you shortly.
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 px-4 py-3 rounded">
          ❌ Something went wrong. Please try again.
        </div>
      )}

      <h2 className="text-2xl font-bold text-center">Request a Custom Quote</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Describe the Part</label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full border px-4 py-2 rounded bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Optional Photo</label>
          <input
            type="file"
            name="file"
            accept="image/*"
            className="w-full text-gray-700 dark:text-gray-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send Request
        </button>
      </form>
    </div>
  )
}

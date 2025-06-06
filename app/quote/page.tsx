'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function QuotePage() {
  const router = useRouter()
  const [file, setFile] = useState<File | null>(null)
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: ''
  })
  const [material, setMaterial] = useState('pla')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ file, dimensions, material })
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Get a Quote</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Upload Your File (STL, OBJ, or STEP)
          </label>
          <input
            type="file"
            accept=".stl,.obj,.step"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {/* Dimensions */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Length (cm)</label>
            <input
              type="number"
              value={dimensions.length}
              onChange={(e) => setDimensions({...dimensions, length: e.target.value})}
              className="w-full p-2 border rounded-lg"
              placeholder="10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Width (cm)</label>
            <input
              type="number"
              value={dimensions.width}
              onChange={(e) => setDimensions({...dimensions, width: e.target.value})}
              className="w-full p-2 border rounded-lg"
              placeholder="10"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Height (cm)</label>
            <input
              type="number"
              value={dimensions.height}
              onChange={(e) => setDimensions({...dimensions, height: e.target.value})}
              className="w-full p-2 border rounded-lg"
              placeholder="10"
            />
          </div>
        </div>

        {/* Material Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Material</label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="pla">PLA (Standard)</option>
            <option value="petg">PETG (Strong & Durable)</option>
            <option value="abs">ABS (Heat Resistant)</option>
            <option value="tpu">TPU (Flexible)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Calculate Quote
        </button>
      </form>

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
'use client'

import React, { useRef } from 'react'
import { serverAction } from './action/form'

const Page = () => {
  const ref = useRef(null)

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-indigo-500 flex justify-center items-center">
      
      <form
        ref={ref}
        action={async (formData) => {
          await serverAction(formData)
          ref.current.reset()
        }}
        className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Server Action Form
        </h1>

        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 font-semibold text-gray-700"
          >
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Address */}
        <div className="mb-6">
          <label
            htmlFor="add"
            className="block mb-2 font-semibold text-gray-700"
          >
            Address
          </label>

          <input
            type="text"
            id="add"
            name="add"
            placeholder="Enter your address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Submit
        </button>
      </form>

    </div>
  )
}

export default Page
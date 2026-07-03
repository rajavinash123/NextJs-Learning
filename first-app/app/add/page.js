'use client'
import React from 'react'

const page = () => {

  const clickHandler = async () => {
    // Data to send to backend
    const data = {
      name: "avinash",
      role: "developer"
    }

    // API call
    const response = await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    // Convert response to JSON
    const res = await response.json()

    console.log(res)
  }

  return (
    <div className='gap-4 text-2xl font-bold'>
      <h1>Add Page</h1>

      <button
        className='border px-4 py-2 rounded'
        onClick={clickHandler}
      >
        Click me
      </button>
    </div>
  )
}

export default page
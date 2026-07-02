// ---------------- CLIENT COMPONENT EXAMPLE ----------------
// By default, Next.js components are Server Components.
// Server Components cannot use hooks like useState/useEffect
// and cannot handle event handlers like onClick.
// If we need state, interactivity, or browser features,
// we must add 'use client' at the top.

/*
'use client'

import React, { useState } from 'react'

const Page = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Client Component Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  )
}

export default Page
*/


// ---------------- Server Side COMPONENT EXAMPLE ----------------


import React from 'react'

// By default, every component inside app/ folder
// in Next.js is a Server Component
const Page = () => {

  // Server Components support console.log
  // Output appears in terminal/server logs
  // NOT in browser console
  console.log("Running on server")

  return (
    <div className="p-20">
      {/* Heading */}
      <h1>Server Component Example</h1>

      {/* Description */}
      <p>This component runs on the server side.</p>

      {/* Button is allowed as UI */}
      {/* But onClick is NOT allowed in Server Component */}
      <button>Static Button</button>
    </div>
  )
}

export default Page
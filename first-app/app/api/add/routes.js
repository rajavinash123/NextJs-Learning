import { NextResponse } from 'next/server'

// Handles POST request to /api/add
export async function POST(request) {

  // Extract JSON data from frontend request
  const data = await request.json()

  // Print received data in server terminal
  console.log(data)

  // Return JSON response back to frontend
  return NextResponse.json({
    success: true,
    data: data
  })
}
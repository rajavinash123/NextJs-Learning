"use server"

import fs from "fs/promises"

// Server Action
export const serverAction = async (formData) => {

  // Get values from the form
  const name = formData.get("name")
  const address = formData.get("add")

  // Print values in terminal
  console.log("Name:", name)
  console.log("Address:", address)

  // Write data into a file
  await fs.writeFile(
    "avinash.txt",
    `Name: ${name}\nAddress: ${address}`
  )

  console.log("File created successfully.")
}
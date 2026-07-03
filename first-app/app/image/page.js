import React from 'react'
import Image from 'next/image'

const ImagePage = () => {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1782807909041-a8557ce3b03e?w=1000&auto=format&fit=crop&q=60"
        alt="Nature Image"
        width={500}
        height={300}
      />
    </div>
  )
}

export default ImagePage
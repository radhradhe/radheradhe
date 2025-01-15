"use client"
import { useState, useEffect } from 'react'
import { MasonryGrid } from './MasonryGrid'
import Imagenew from "../public/image.jpg"

const images = [
  { src: "/placeholder.svg?text=Image2&width=300&height=400", alt: "Image 2", width: 300, height: 400 },
  { src: "/placeholder.svg?text=Image3&width=500&height=300", alt: "Image 3", width: 500, height: 300 },
  { src: "/placeholder.svg?text=Image4&width=400&height=600", alt: "Image 4", width: 400, height: 600 },
  { src: "/placeholder.svg?text=Image5&width=600&height=400", alt: "Image 5", width: 600, height: 400 },
  { src: "/placeholder.svg?text=Image6&width=300&height=300", alt: "Image 6", width: 300, height: 300 },
  { src: "/placeholder.svg?text=Image7&width=400&height=500", alt: "Image 7", width: 400, height: 500 },
  { src: "/placeholder.svg?text=Image8&width=500&height=400", alt: "Image 8", width: 500, height: 400 },
  { src: "/placeholder.svg?text=Image9&width=600&height=300", alt: "Image 9", width: 600, height: 300 },
  { src: "/placeholder.svg?text=Image10&width=400&height=400", alt: "Image 10", width: 400, height: 400 },
  { src: "/placeholder.svg?text=Image11&width=300&height=500", alt: "Image 11", width: 300, height: 500 },
  { src: "/placeholder.svg?text=Image12&width=500&height=600", alt: "Image 12", width: 500, height: 600 },
  { src: "/placeholder.svg?text=Image13&width=400&height=300", alt: "Image 13", width: 400, height: 300 },
  { src: "/placeholder.svg?text=Image14&width=600&height=400", alt: "Image 14", width: 600, height: 400 },
  { src: "/placeholder.svg?text=Image15&width=300&height=400", alt: "Image 15", width: 300, height: 400 },
  { src: "/placeholder.svg?text=Image16&width=500&height=300", alt: "Image 16", width: 500, height: 300 },
  { src: "/placeholder.svg?text=Image17&width=400&height=500", alt: "Image 17", width: 400, height: 500 },
  { src: "/placeholder.svg?text=Image18&width=600&height=600", alt: "Image 18", width: 600, height: 600 },
  { src: "/placeholder.svg?text=Image19&width=400&height=300", alt: "Image 19", width: 400, height: 300 },
  { src: "/placeholder.svg?text=Image20&width=500&height=400", alt: "Image 20", width: 500, height: 400 },
]

export function Gallery() {
  const [columns, setColumns] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1)
      } else if (window.innerWidth < 768) {
        setColumns(2)
      } else if (window.innerWidth < 1024) {
        setColumns(3)
      } else {
        setColumns(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <MasonryGrid images={images} columns={columns} />
    </div>
  )
}


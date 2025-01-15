import React, { useState, useEffect, JSX } from 'react'
import { ImageCard } from './ImageCard'

interface Image {
  src: string
  alt: string
  width: number
  height: number
}

interface MasonryGridProps {
  images: Image[]
  columns: number
}

export function MasonryGrid({ images, columns }: MasonryGridProps) {
  const [columnHeights, setColumnHeights] = useState<number[]>(Array(columns).fill(0))
  const [renderedImages, setRenderedImages] = useState<JSX.Element[][]>(Array(columns).fill([]))

  useEffect(() => {
    const newColumnHeights = Array(columns).fill(0)
    const newRenderedImages: JSX.Element[][] = Array(columns).fill(0).map(() => [])

    images.forEach((image, index) => {
      const shortestColumn = newColumnHeights.indexOf(Math.min(...newColumnHeights))
      newRenderedImages[shortestColumn].push(
        <ImageCard
          key={index}
          src={image.src || "../public/image.jpg"}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      )
      newColumnHeights[shortestColumn] += image.height / image.width
    })

    setColumnHeights(newColumnHeights)
    setRenderedImages(newRenderedImages)
  }, [images, columns])

  return (
    <div className="flex gap-4">
      {renderedImages.map((column, index) => (
        <div key={index} className="flex-1">
          {column}
        </div>
      ))}
    </div>
  )
}


import Image from 'next/image'
import Imagenew from "../public/image.jpg"
import { Card } from './ui/card'

interface ImageCardProps {
  src: string
  alt: string
  width: number
  height: number
}

export function ImageCard({ src, alt, width, height }: ImageCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <Image
        src={src || Imagenew}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
      />
    </Card>
  )
}


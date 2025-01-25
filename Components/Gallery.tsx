import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import image1 from '../app/assests/image1.jpeg';
import image2 from '../app/assests/image2.png';
import image3 from '../app/assests/image3.jpeg';
import image4 from '../app/assests/image3.jpeg';
import image5 from '../app/assests/image1.jpeg';

// Define the type for image objects
interface ImageN {
  src: StaticImageData | string;
  alt: string;
  size: 'small' | 'medium' | 'large';
}

const Gallery: React.FC = () => {
  // Updated images array with size variations
  const [images, setImages] = useState<ImageN[]>([
    { src: image1, alt: 'Image 1', size: 'small' },
    { src: image2, alt: 'Image 2', size: 'medium' },
    { src: image3, alt: 'Image 3', size: 'large' },
    { src: image4, alt: 'Image 4', size: 'medium' },
    { src: image5, alt: 'Image 5', size: 'small' },
  ]);

  // Function to randomize image sizes
  const randomizeSizes = () => {
    const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];
    const newImages = images.map((img) => ({
      ...img,
      size: sizes[Math.floor(Math.random() * sizes.length)],
    }));
    setImages(newImages);
  };

  return (
    <div className="  bg-[#FBF8F4]  py-8">
      <div className="flex justify-center mb-6">
        {/* Randomize Sizes Button */}
    <h1  className='text-4xl font-bold text-center text-gray-900'>
        Gallery
    </h1>
      </div>

      {/* Image Gallery */}
      <div className="grid gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md"
            style={{
              gridColumn: index % 2 === 0 ? 'span 2' : 'span 3',
              height: index % 2 === 0 ? '300px' : '300px',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Mobile Styling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(1, 1fr);
          }
        }
        @media (min-width: 769px) {
          .grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;

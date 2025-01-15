"use client";

import { useState, useEffect, useRef } from "react";
import { ImageCard } from "./ImageCard";

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function DynamicGallery() {
  const [images, setImages] = useState<Image[]>([]);
  const [columns, setColumns] = useState(4);
  const [rows, setRows] = useState<Image[][]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Fetch images on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list");
        const data = await response.json();

        const newImages = data.slice(0, 30).map((item: any) => ({
          src: item.download_url,
          alt: `Image by ${item.author}`,
          width: item.width,
          height: item.height,
        }));

        setImages(newImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  // Adjust the number of columns based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 768) {
        setColumns(2);
      } else if (window.innerWidth < 1024) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Recalculate rows when images or columns change
  useEffect(() => {
    const groupedRows: Image[][] = [];
    for (let i = 0; i < images.length; i += columns) {
      groupedRows.push(images.slice(i, i + columns));
    }
    setRows(groupedRows);
  }, [images, columns]);

  return (
    <div ref={galleryRef} className="space-y-3">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex w-full space-x-3">
          {row.map((image, imageIndex) => {
            const aspectRatio = image.width / image.height;
            const flexGrow = aspectRatio;

            return (
              <div
                key={imageIndex}
                className="flex-grow"
                style={{
                  flexGrow,
                  transition: "transform 0.3s ease-out",
                  willChange: "transform",
                }}
              >
                <ImageCard
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={150}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

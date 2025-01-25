// components/ThankYouPage.tsx
"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";


const ThankYouPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex pt-[150px] justify-center  bg-white overflow-hidden relative">
      {/* Background Confetti Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              animationDelay: `${Math.random() * 2}s`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Thank You Message */}
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        } text-center mx-4 p-8 rounded-lg bg-white relative z-10`}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You</h1>
        <p className="text-lg text-gray-600">
          We  will Notify when we will ready.
        </p>
        <Button
          className="mt-6 px-6 py-2  font-semibold  "
          onClick={() => (window.location.href = "/")}
          variant="outline"
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default ThankYouPage;

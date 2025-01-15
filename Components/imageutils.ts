export function generateRandomSize() {
    const width = Math.floor(Math.random() * (600 - 300 + 1)) + 300; // Random width between 300 and 600
    const height = Math.floor(Math.random() * (600 - 200 + 1)) + 200; // Random height between 200 and 600
    return { width, height };
  }
  
  
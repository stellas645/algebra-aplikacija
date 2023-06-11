export function RandomColor() {
    const Red = Math.floor(Math.random() * 256);
    const Green = Math.floor(Math.random() * 256);
    const Blue = Math.floor(Math.random() * 256);
      
    const Color = "rgb(" + Red + ", " + Green + ", " + Blue + ")";
  
    return Color;
  }
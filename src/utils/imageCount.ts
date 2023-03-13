import { useState, useEffect } from "react";


function imageCount(category: string): number {
  const [imageCount, setImageCount] = useState(0);

  useEffect(() => {
    fetch("./images.json")
      .then((response) => response.json())
      .then((data) => {
        setImageCount(data[0][category]);
      })
      .catch((error) => console.error(error));
  }, []);

  return imageCount;
}

export default imageCount;
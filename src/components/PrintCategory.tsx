import { useState } from "react";
import ImageSlider from "./ImageSlider";

const PrintCategory: React.FC<{ category: { name: string; num: number } }> = ({
  category,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let arr = new Array();
  for (let i = 0; i < category.num; i++) arr.push(i);
  return (
    <div className="category">
      <ImageSlider
        category={category}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <h1>{category.name}</h1>
      <div className="image-list">
        {arr.map((el) => (
          <img
            key={el}
            src={`assets/${category.name}/${el + 1}.png`}
            onClick={() => {
              setCurrentImageIndex(el);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PrintCategory;

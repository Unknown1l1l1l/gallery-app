import { useState } from "react";
import PrintCategory from "./components/PrintCategory";
import "./style/app.scss";
import imageCount from "./utils/imageCount";

function App() {
  const [filter, setFilter] = useState("all");
  const categories = [
    { name: "Random", num: imageCount("Random") },
    { name: "2B", num: imageCount("2B") },
    { name: "A18", num: imageCount("A18") },
    { name: "ChunLee", num: imageCount("ChunLee") },
    { name: "Genshin", num: imageCount("Genshin") },
    { name: "Yourichi", num: imageCount("Yourichi") },
    { name: "Tifa", num: imageCount("Tifa") },
  ];
  return (
    <div className="container">
      <div className="content">
        <div className="slider">
          <select onChange={(el) => setFilter(el.target.value)}>
            <option value="all">All</option>
            {categories.map((category, index) => (
              <option key={category.name} value={index}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="galery">
          {filter === "all" ? (
            <div>
              {categories.map((category, index) => {
                return <PrintCategory key={index} category={category} />;
              })}
            </div>
          ) : (
            <PrintCategory category={categories[filter as any]} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

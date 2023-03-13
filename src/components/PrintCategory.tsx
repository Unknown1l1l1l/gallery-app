const PrintCategory: React.FC<{ category: { name: string; num: number } }> = ({
  category,
}) => {
  let arr = new Array();
  for (let i = 0; i < category.num; i++) arr.push(i);
  return (
    <div className="category">
      <h1>{category.name}</h1>
      <div className="image-list">
        {arr.map((el) => (
          <img key={el} src={`assets/${category.name}/${el + 1}.png`} />
        ))}
      </div>
    </div>
  );
};

export default PrintCategory;

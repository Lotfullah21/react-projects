const Category = ({ categories, selectedCategory }) => {
  return (
    <div className="btn-category-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            className="btn btn-category"
            onClick={() => selectedCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Category;

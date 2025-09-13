import React from 'react';

const FilterSidebar = ({ filters, setFilters, products }) => {
  // Get unique categories from the products
  const categories = [...new Set(products.map((p) => p.category))];

  const handleCheckboxChange = (categoryValue) => {
    const currentCategories = filters.category;
    // Check if the category is already in the filter
    const updatedCategories = currentCategories.includes(categoryValue)
      // If yes, remove it
      ? currentCategories.filter((cat) => cat !== categoryValue)
      // If no, add it
      : [...currentCategories, categoryValue];
    
    setFilters({ ...filters, category: updatedCategories });
  };

  // Clears all category selections
  const handleUnselectAll = () => {
    setFilters({ ...filters, category: [] });
  };

  return (
    <aside className="font-sans">
      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
        <h2 className="text-sm font-bold uppercase tracking-wider">Filter</h2>
        {filters.category.length > 0 && (
          <button 
            onClick={handleUnselectAll}
            className="text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-black underline"
          >
            UNSELECT ALL
          </button>
        )}
      </div>

      <div className="py-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">
          Category
        </h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.category.includes(cat)}
                onChange={() => handleCheckboxChange(cat)}
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black focus:ring-offset-0"
              />
              <span className="text-sm capitalize text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
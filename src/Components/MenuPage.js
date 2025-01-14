import React, { useState } from "react";
import "./MenuPage.css";

// Mock menu data
const mockMenuData = [
  { id: 1, name: "Pizza", price: 12 },
  { id: 2, name: "Burger", price: 8 },
  { id: 3, name: "Pasta", price: 10 },
  { id: 4, name: "Sushi", price: 15 },
  { id: 5, name: "Steak", price: 25 },
];

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  // Filter the menu items based on the search query
  const filteredItems = mockMenuData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort menu items by price or name based on user selection
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return a.price - b.price;
  });

  return (
    <div className="menu-container">
      <h2 className="menu-title">Menu</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search menu..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <select onChange={handleSort} value={sortBy} className="sort-select">
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <div className="menu-grid">
        {sortedItems.map((item) => (
          <div key={item.id} className="menu-item">
            <h3 className="menu-item-name">{item.name}</h3>
            <p className="menu-item-price">${item.price}</p>
            <button className="menu-item-delete">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;

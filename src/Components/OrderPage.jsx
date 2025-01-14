import React, { useState } from "react";
import "./OrderPage.css";

const OrderPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pizza", price: 12, quantity: 2 },
    { id: 2, name: "Burger", price: 8, quantity: 1 },
    { id: 3, name: "Pasta", price: 10, quantity: 1 },
    { id: 4, name: "Burger", price: 8, quantity: 1 },
    { id: 5, name: "Burger", price: 8, quantity: 1 },
    { id: 6, name: "Pizza", price: 12, quantity: 1 },
    { id: 7, name: "Steak", price: 25, quantity: 2 },
    // Add more items as needed
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(cartItems.length / itemsPerPage);
  const currentItems = cartItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const placeOrder = () => {
    alert("Order placed successfully!");
    setCartItems([]); // Clear cart after order
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="order-container">
      <h2 className="order-title">Order Summary</h2>

      <div className="order-items">
        <ul>
          {currentItems.map((item) => (
            <li key={item.id} className="order-item">
              <span className="item-name">{item.name}</span>
              <span className="item-quantity">
                x {item.quantity} = ${item.price * item.quantity}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pagination-controls">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>

      <div className="order-total">
        <h3>Total: ${totalPrice}</h3>
      </div>
      <button className="place-order-btn" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
};

export default OrderPage;

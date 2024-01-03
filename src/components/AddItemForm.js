// AddItemForm.js
import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const AddItemForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [error, setError] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/api/auction', {
        name: itemName,
        description: itemDescription,
        currentBid: parseFloat(startingBid),
      });

      console.log('Item added successfully:', response.data);

      // Optionally: Redirect to the auction list or perform other actions
    } catch (error) {
      console.error('Error adding item:', error);

      setError(error.message || 'Failed to add item');
    }
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </label>
        <label>
          Item Description:
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Starting Bid:
          <input
            type="number"
            value={startingBid}
            onChange={(e) => setStartingBid(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Item</button>
      </form>
      {error && <div>Error adding item: {error}</div>}
    </div>
  );
};

export default AddItemForm;

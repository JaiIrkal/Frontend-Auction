// BidForm.js
import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const BidForm = ({ match }) => {
  const [bidAmount, setBidAmount] = useState('');
  const [error, setError] = useState(null);
  const auctionItemId = match.params.id;

  if (!auctionItemId) {
    console.error('Auction item ID is null or undefined');
    // Handle this case appropriately, e.g., redirect or show an error message
    return;
  }

  const handleBidSubmit = async (e) => {
    e.preventDefault();

    //Send a PUT request to update the bid
    axiosInstance.put(`/api/auction/${auctionItemId}`, { currentBid: parseFloat(bidAmount) }, { headers: { 'Content-Type': 'application/json' } })
      .then(response => {
        // Handle success, maybe update state or show a success message
        console.log('Bid placed successfully');
      })
      .catch(error => {
        console.error('Error placing bid', error);
        setError(error.message);
        console.log('Request payload:', { currentBid: bidAmount });
      });
  };

  return (
    <div>
      <h2>Place Bid</h2>
      <form onSubmit={handleBidSubmit}>
        <label>
          Bid Amount:
          <input
            type="number"
            name='bidAmount'
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
          />
        </label>
        <button type="submit">Place Bid</button>
      </form>
      {error && <div>Error placing bid: {error}</div>}
    </div>
  );
};

export default BidForm;
// AuctionItemDetail.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from './axiosInstance';

const AuctionItemDetail = ({ match }) => {
  const [auctionItem, setAuctionItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const itemId = match.params.id;

    axiosInstance.get(`/api/auction/${itemId}`)
      .then(response => setAuctionItem(response.data))
      .catch(error => {
        console.error('Error finding auction item', error);
        setError(error.message);
      });
  }, [match.params.id]);

  if (error) {
    return <div>Error finding auction item: {error}</div>;
  }

  if (!auctionItem) {
    setTimeout(2000)
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{auctionItem.name}</h2>
      <p>Description: {auctionItem.description}</p>
      <p>Current Bid: ${auctionItem.currentBid}</p>
      <Link to={`/bid/${auctionItem.id}`}>
              <button>Place Bid</button>
      </Link>
    </div>
  );
};

export default AuctionItemDetail;

import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance'; // Import the Axios instance
import { Link } from 'react-router-dom';
import './AuctionList.css'

const AuctionList = () => {
  const [auctionItems, setAuctionItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance.get('/api/auction', { timeout: 10000 }) // Use the Axios instance for API requests
      .then(response => {
        setAuctionItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching auction items', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error fetching auction items: {error}</div>;
  }

  return (
    <div>
      <h2>Auction Items</h2>
      <Link to={`/add`}>
        <button>Add Item</button>
      </Link>
      <div className='list-container'>
        {auctionItems.map(item => (
          <div key={item.id} className='item-div'>
            {/* <img src={item.image} alt='hello'/> */}
            <div className='image-div'></div>
            <h3>{item.name}</h3>
            <p>Current Bid: ${item.currentBid}</p>
            <div className='button-group'>
              <Link to={`/bid/${item.id}`}>
                <button>Place Bid</button>
              </Link>
              <Link to={`/auction/${item.id}`}>
                <button>View Item</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionList;


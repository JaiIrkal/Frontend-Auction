// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuctionList from './components/AuctionList';
import AuctionItemDetail from './components/AuctionItemDetail';
import BidForm from './components/BidForm';
import AddItemForm from './components/AddItemForm';

function App() {
  return (
    <Router>
      <div>
        <h1>Auction Website</h1>
        <Switch>
          <Route path="/" exact component={AuctionList} />
          <Route path="/auction/:id" component={AuctionItemDetail} />
          <Route path="/bid/:id" component={BidForm} />
          <Route path="/add" component={AddItemForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


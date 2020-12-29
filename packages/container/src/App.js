import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
  return (
    <BrowserRouter>
      <h1>hello</h1>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};

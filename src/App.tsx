import React from 'react';
import ImageGrid from './components/ImageGrid/ImageGrid';
import TopicCloud from './components/TopicCloud/TopicCloud';
import ProductIntro from './components/ProductIntro/ProductIntro';

import './App.scss';

function App() {
  return (
    <div className="homepage">
      <div className="header-container">
        <h1 className="header-container__headline">
          Empowering the people of medicine through education and community.
        </h1>
      </div>
      <div className="page-content">
        <ProductIntro />
        <ImageGrid />
        <TopicCloud />
      </div>
    </div>
  );
}

export default App;

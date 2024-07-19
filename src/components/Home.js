import React from 'react';
import './Home.css';

const Home = () => (
  <main className="home-container">
    <h1 className="welcome-header">Welcome to Srimandir</h1>
    <div className="image-container">
      <img src="https://via.placeholder.com/500x300" alt="Srimandir Image" />
    </div>
    <div className="devotional-quote">
      <blockquote>
        "Faith is the bird that feels the light and sings when the dawn is still dark."
      </blockquote>
    </div>
    <div className="call-to-action">
      <button>Learn More</button>
    </div>
  </main>
);

export default Home;
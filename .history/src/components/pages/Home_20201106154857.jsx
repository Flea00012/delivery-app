import React, { useState, useEffect } from 'react';

import logo from '../../artwork/markus-spiske-BPxkU4uPq6Y-unsplash.jpg'

export default function Home() {
  //custom hook from useState and useEffect hooks

  return (
    <>
      <div className="pageStyle">
        <p> Welcome to Express Delivery </p>

        <p>
          {' '}
          If you are expecting a delivery please enter your package ID and click
          "find"{' '}
        </p>
        <img
          className="picture"
          src="logi"
          alt="a logo for the transport company called express delivery"
        />
        <p> Please enter your package ID below </p>
        <input placeholder="packageID" />
        <button />
      </div>
    </>
  );
}

import React, { useState, useEffect } from 'react';

import logo from '../../artwork/markus-spiske-BPxkU4uPq6Y-unsplash.jpg';
import '../../css/styles.css';

export default function Login() {
  return (
    <>
      <div>Login Page</div>
      <div className="pageStyle">
        <p> Welcome to Express Delivery </p>

        <p>
          {' '}
          If you are expecting a delivery please enter your package ID and click
          "find"{' '}
        </p>
        <img
          className="picture"
          src={logo}
          alt="a package is del"
        />
        <p> Please enter your package ID below </p>
        <input placeholder="packageID" />
        <button />

        <div></div>
      </div>
    </>
  );
}

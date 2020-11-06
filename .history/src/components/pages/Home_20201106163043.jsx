import React, { useState, useEffect } from 'react';

import logo from '../../artwork/7028de95-3f1c-4817-ac8e-846941592c57_200x200.png';
import '../../css/styles.css';

export default function Home() {
  //custom hook from useState and useEffect hooks
 
  const [status, setStatus] = useState(0);

  const [information, setInformation] = useState([]);
  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Contructor like hook
  useEffect(() => {
    const getData = async () => {
      try {
        // Make fetch request to obtain info frmo the endpoint URL address
        // Cors is a security measure.
        const response = await fetch(endpoint, { mode: "cors" });

        // Once the information is downloaded we transformed it to json
        const data = await response.json();

        // Once the information is transformed to json we put it into our hooks
        setInformation(data);

        // Once we have the information in the hook we give the ok! to change the status
        setStatus(1);
      } catch {
        setStatus(2);
      }
    };

    getData();
  }, []); // this last [] is cruccial otherwise you will call over and over the server and crash it


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
          src={logo}
          alt="a logo for the transport company called express delivery"
        />
        <p> Please enter your package ID below </p>
        <input placeholder="packageID" />
        <button />

       
      </div>
    </>
  );
}

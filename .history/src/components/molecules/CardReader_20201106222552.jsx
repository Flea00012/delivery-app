import React, { useEffect, useState } from 'react';
import Card from './Card';

async function fetchPackages(endpoint){
    try {
        // Make fetch request to obtain info frmo the endpoint URL address
        // Cors is a security measure.
        const response = await fetch(endpoint, { mode: 'cors' });

        // Once the information is downloaded we transformed it to json
        const data = await response.json();

        // Once the information is transformed to json we put it into our hooks
       

        // Once we have the information in the hook we give the ok! to change the status
        return data;
      } catch (err) {
       throw err;
      }
}

function comparator(dataArray[], value){


}

export default function CardReader() {
  // Status acts as a traffic light controller 🚦 for our internet access
  // 0 is loading, 1 is ready, 2 is error.
  const [status, setStatus] = useState(0);

  const [information, setInformation] = useState([]);
  const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

  // Contructor like hook
  useEffect(() => {
    const getData = async () => {
      try {
        // Make fetch request to obtain info frmo the endpoint URL address
        // Cors is a security measure.
        const response = await fetch(endpoint, { mode: 'cors' });

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
    <div>
      <h1>React fetch {status}</h1>
      {status === 0 ? <p>Loading...</p> : null}
      {status === 1 ? <Card data={information[0]} /> : null}
      {status === 2 ? <p>Sorry we cannot find data</p> : null}
    </div>
  );
}

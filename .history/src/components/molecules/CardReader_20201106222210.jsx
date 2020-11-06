import React, { useEffect, useState } from 'react';
import Card from './Card';

function fetchPackages(){
    

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

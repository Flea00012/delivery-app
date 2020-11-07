import logo from '../../artwork//markus-spiske-BPxkU4uPq6Y-unsplash.jpg';
import '../../css/styles.css';
import { fetchPackages, comparator } from '../molecules/CardReader';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  //custom hook from useState and useEffect hooks
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const [packageID, setPackageID] = useState(null);
  const inputPackageRef = useRef();

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(0);
        console.log(packageID);
        const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';
        const data = await fetchPackages(endpoint).filter(
          (value) => value.status === packageID
        );
        console.log(data);
        setInformation(data);
        setStatus(1);
      } catch {
        setStatus(2);
      }

<<<<<<< HEAD
    const items = await data.json();

    console.log(items);

    setItems(items);
  };

      // here use the comparator to get the specific package id
    }

    fetchData();
  }, [packageID]);
>2-fixTheSearchOnHomePage

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
        <input ref={inputPackageRef} placeholder="packageID" />
        <button
          onClick={() => {
            const pID = inputPackageRef.current.value;
            setPackageID(pID);
          }}
        />

        <div>
          <h1>React fetch {status}</h1>
          {status === 0 ? <p>Loading...</p> : null}
          {status === 1 &&
            information &&
            information.map((i) => {
              return <div key={i.id}>{i.location_id}</div>;
            })}
          {status === 2 ? <p>Sorry we cannot find data</p> : null}
        </div>
      </div>
    </>
  );
}

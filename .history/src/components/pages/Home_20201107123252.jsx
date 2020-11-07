//react core
import { fetchPackages } from '../molecules/fetchPackages';
import { useEffect, useState, useRef } from 'react';

//import styles and pictures
import logo from '../../artwork/markus-spiske-BPxkU4uPq6Y-unsplash.jpg';
import '../../css/styles.css';

// home page template contains searching components and data fetch
export default function Home() {
  //all the hooks for the data
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const [packageID, setPackageID] = useState(null);
  const inputPackageRef = useRef();

  //note status 0: means loading data, status 1: means data found, status 2: means data not found
  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(0);
        console.log(packageID);
        const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';

        // const endpoint =
        //   '/Users/leefowler/Documents/VSCode/SDA8-webdev/reactsda/delivery-app/src/data/data.json';

        // const data = await fetchPackages(endpoint).filter(
        //   (value) => value.user_name === packageID
        // );

        const response = await fetch(endpoint, { mode: 'cors' });

        // Once the information is downloaded we transformed it to json
        const data = await response.json();

        const displayData = data.filter(
          (value) => value.user_name === packageID
        );

        console.log(`data : ${data}`);
        console.log(`displayData : ${displayData}`);
        setInformation(displayData);
        setStatus(1);
      } catch {
        setStatus(2);
      }

      // here use the comparator to get the specific package id
    }

    fetchData();
  }, [packageID]);

  return (
    <>
      <div className="pageStyle">
        <p> Welcome to Express Delivery Mr Jhon Doe </p>

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
          className="button"
          onClick={() => {
            const pID = inputPackageRef.current.value;
            setPackageID(pID);
          }}
        />

        <div>
          <p>We are searching for your package, please be patient</p>
          {status === 0 ? <p>Loading...</p> : null}
          {status === 1 &&
            information &&
            information.map((item) => {
              return (
                <div key={item.id}>
                  {`Package status is ${item.status}
                   and its location is ${item.location_name}
                    and time of delivery is ${item.eta} with a`}
                </div>
              );
            })}
          {status === 2 ? <p>Sorry we cannot find that package</p> : null}
        </div>
      </div>
    </>
  );
}

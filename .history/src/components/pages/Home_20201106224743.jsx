import logo from '../../artwork//markus-spiske-BPxkU4uPq6Y-unsplash.jpg';
import '../../css/styles.css';
import { fetchPackages, comparator } from '../molecules/CardReader';
import { useEffect, useState } from 'react';

export default function Home() {
  //custom hook from useState and useEffect hooks
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  const [packageId, setPackageId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(0);
        const endpoint = 'https://my.api.mockaroo.com/orders.json?key=e49e6840';
        const data = await fetchPackages(endpoint);
        setInformation(data);
        setStatus(1);
      } catch {
        setStatus(2);
      }

      // here use the comparator to get the specific package id
    }

    fetchData();
  }, [packageId]);

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
        <input
          type="button"
          placeholder="packageID"
          onSubmit={(e) => {
            console,.l
            console.log(e.target.value);
          }}
        />
        <button onClick={(e) => e.target.value} />

        <div>
          <h1>React fetch {status}</h1>
          {status === 0 ? <p>Loading...</p> : null}
          {information.length}
          {status === 2 ? <p>Sorry we cannot find data</p> : null}
        </div>
      </div>
    </>
  );
}

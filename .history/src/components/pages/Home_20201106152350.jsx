import React, { useState, useEffect } from 'react';

export default function Home() {
  const [bag, setBag] = useState('');


  //custom hook from useState and useEffect hooks

  function findPackage()}{
  
  
  useEffect ( () => {
    const findPackage = () = setBag(window.innerWidth);
    window.addEventListener(‘resize’, handleResize);
    return () => {
      window.removeEventListener(‘resize’, handleResize);
  };
  });
  
  return width;
  
  }
  

  return (
    <>
      <div className="pageStyle">
        <p> Home Page title </p>
        <img
          src="../../artwork/7028de95-3f1c-4817-ac8e-846941592c57_200x200.png"
          alt="a logo for the transport company called express delivery"
          height="200px"
          width="200px"
        />
        <p> Please enter your package ID below </p>
        <input placeholder="packageID" value={bag} />
        <button onClick={findPackage(value)} />
      </div>
    </>
  );
}

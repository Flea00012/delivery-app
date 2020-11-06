export default function Login() {
  return <div>Login Page</div>;

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

        <div>
          {items.map((item) => (
            <p key={item.itemid}> {item.name} </p>
          ))}
        </div>
      </div>
    </>
  );
}

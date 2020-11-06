import image from '../../artwork/';
import '../../css/styles.css';

export default function Login() {
  return (
    <>
      <div>Sign Up Page title</div>
      <div className="pageStyle">
        <p> Welcome to Express Delivery </p>
        <p>
          {' '}
          If you are expecting a delivery please enter your package ID and click
          "find"{' '}
        </p>
        <img
          className="picture"
          src={image}
          alt="a package is delivered to the client "
        />
        <p> Please enter your name and phone number to login</p>
        <input placeholder="name" /> <input placeholder="phone number" /> <></>
        <input placeholder="address" />
        <div></div>
      </div>
    </>
  );
}

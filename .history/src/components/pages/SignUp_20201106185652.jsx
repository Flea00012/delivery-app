export default function Login() {
  import image from '../../artwork/markus-spiske-BPxkU4uPq6Y-unsplash.jpg';
  import '../../css/styles.css';

  return (
    <>
      <div>Sign Up Page title</div>
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
          src={image}
          alt="a package is delivered to the client "
        />
        <p> Please enter your name and phone number to login</p>
        <input placeholder="name" /> <input placeholder="phone number" />{' '}
        <div></div>
      </div>
    </>
  );
}

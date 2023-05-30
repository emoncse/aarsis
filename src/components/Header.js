function Header() {
  return (
    <header>
      <video src="./video.mp4" loop autoPlay muted></video>
      <h1>Welcome to Aarsis Solution!</h1>
      <div className="row">
        {
          <p className="">At Aarsis Solution, we pride ourselves on delivering top-notch software solutions to clients across the globe. With our dedicated team of experts and a passion for excellence, we offer a comprehensive range of services to meet your software needs. </p>
        }
        {/* <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button> */}
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;

import github_logo from "../src/github_logo.svg"

const Header = () => {
  let date = new Date();
  let formattedDate = date.toDateString().split(" ");
  return (
    <header>
      <div style={{ backgroundColor: "orange", padding: "0.5rem", display:"flex", alignItems:"center",gap:"1rem" }}>
        {" "}
        <a href="https://github.com/UhOhSpiders/xylo-guesser">
          <img src={github_logo} style={{ width: "30px", paddingLeft:"1rem" }} />
        </a>
        <h3 id="nav-bar-heading">Xylo Guesser</h3>
      </div>
      <div
        style={{
          display: "flex"
        }}
      >
        <h1 id="splash-heading">Xylo Guesser</h1>
        <h2>
          {formattedDate[1]} {formattedDate[2]}, {formattedDate[3]}
        </h2>
      </div>
      <hr></hr>
    </header>
  );
};

export default Header;

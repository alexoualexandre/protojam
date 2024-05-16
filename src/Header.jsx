import Card from "./Card";
import { MyContext } from "./context";
import Menuburger from "./menuberger";
import { Link } from "react-router-dom";

function Header() {
  const { open, setOpen } = MyContext();
  return (
    <>
      <header className="header">
        <button className="icon-menu" onClick={() => setOpen(!open)}>
          &#9776;
        </button>
        <h1 className="marque">Randox</h1>

        <div className="destination">
      <div className="btnDest">
          <Link to="/afrique" >
            <button className="btn" >
              Afrique
              <img
                className="iconeDisplay"
                src="../public/images/indiens.png"
                alt="les indiens d'amérique"
              />
            </button>
          </Link>
          </div>
          <div className="btnDest">
          <Link to="/amerique" >
            <button className="btn">
              Amérique
              <img
                className="iconeDisplay"
                src="../public/images/indiens.png"
                alt="les indiens d'amérique"
              />
            </button>
          </Link>
          </div>
          <div className="btnDest">
          <Link to="/asie" >
            <button className="btn">
              Asie
              <img
                className="iconeDisplay"
                src="../public/images/indiens.png"
                alt="les indiens d'amérique"
              />
            </button>
          </Link>
          </div>
          <div className="btnDest">
          <Link to="/australie" >
            <button className="btn">
              Australie
              <img
                className="iconeDisplay"
                src="../public/images/indiens.png"
                alt="les indiens d'amérique"
              />
            </button>
          </Link>
          </div>
          <div className="btnDest">
          <Link to="/europe" > 
            <button className="btn">
              Europe
              <img
                className="iconeDisplay"
                src="../public/images/indiens.png"
                alt="les indiens d'amérique"
              />
            </button>
          </Link>
          </div>
        </div>
      </header>
      <Menuburger />
      <Card/>
    </>
  );
}

export default Header;

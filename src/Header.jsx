import { MyContext } from "./context";
import Menuburger from "./menuberger";

function Header() {
  const {open,setOpen} = MyContext();
  return (
    <>
      <header className="header">
        <button className="icon-menu" onClick={()=>setOpen(!open)}>&#9776;</button>
        <h1 className="marque">Randox</h1>
        
        <div className="destination">
      <button className="btnDest">Amérique
      <img  className="iconeDisplay" src="../public/images/indiens.png" alt="les indiens d'amérique"/>
      </button>
      <button className="btnDest">Afrique</button>
      <button className="btnDest">Asie</button>
      <button className="btnDest">Australie</button>
      <button className="btnDest">Europe</button>
    </div>
      </header>
<Menuburger />

</>
  );
}

export default Header;

    
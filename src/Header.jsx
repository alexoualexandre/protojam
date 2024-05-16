
import { MyContext } from "./context";
import Menuburger from "./menuberger";

function Header() {
    const {open,setOpen} = MyContext();
  return (
    <>
      <header className="header">
        <button className="icon-menu" onClick={()=>setOpen(!open)}>&#9776;</button>
        <h1 className="marque">Randox</h1>
      </header>
      <Menuburger />
    </>
  );
}

export default Header;

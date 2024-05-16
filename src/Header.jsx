function Header() {
  return (
    <>
      <header className="header">
        <p className="icon-menu">&#9776;</p>
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
    </>
  );
}

export default Header;

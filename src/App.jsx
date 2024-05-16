import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Allcontext } from "./context";


function App() {
  return (
    <>

      <Allcontext>
        <Header />
        <Outlet />
      </Allcontext>
    </>
  );
}

export default App;

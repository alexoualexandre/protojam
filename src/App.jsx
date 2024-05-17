import { Outlet } from "react-router-dom";
import Header from "./Header";
<<<<<<< HEAD

function App() {
  return (
    <>
      <Header />
      <Outlet />
=======
import { Allcontext } from "./context";
import Description2 from "./Description2";


function App() {
  return (
    <>

      <Allcontext>
        <Header />
        <Description2/>
        <Outlet />
      </Allcontext>
>>>>>>> 97cea93847551f1220e394a39d03b9c9f061c5b2
    </>
  );
}

export default App;

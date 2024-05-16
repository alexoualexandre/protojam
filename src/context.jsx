import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function Allcontext({children}) {
    const [open,setOpen] = useState(false);
   
  return (
    <Context.Provider value={{open,setOpen}} >
      {children}
    </Context.Provider>
  )
}

export const MyContext = ()=>useContext(Context);
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';


import { Link } from 'react-router-dom';
import ContextOptions from "./ContextOptions";

export default function NavbarMobile (props) {

  let showNavbar = true;

  const [classDisplay, setClassDisplay] = useState("flex");

  const classChangeDisplay = () => {
    setClassDisplay("hidden");
    showNavbar = false;
  };

  return (
    <>
    <ContextOptions.Provider value={{ classDisplay , setClassDisplay }}>
    <div className={classDisplay}>

    <nav className='navbar w-full flex flex-row bg-[#6a3463] text-white justify-around pt-10 basis-full sm:hidden'>

      <Link to="/options"><button onClick={classChangeDisplay}><MoreHorizIcon /></button></Link>

      <h1 className='flex font-bold self-center'>PÁGINA INICIAL</h1>

      <a href="/">
          <SearchIcon />
      </a>

    </nav>

    </div>
    </ContextOptions.Provider>
</>
  )
};

import React from 'react';
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { useMediaQuery } from 'react-responsive';


export const Router = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
  
    const [ isopen, setisopen ] = React.useState(false);
  
    const toggle = () => {
      setisopen(!isopen);
    };
  
    return (
      <BrowserRouter>
        <NavBar onHamburgerClick={toggle}/>
        {/* { isMobile && <HamburgerMenu isOpen={isopen} toggle={toggle} />} */}

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Services />} />
          <Route path="workshops" element={<Workshops />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };
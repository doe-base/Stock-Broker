import React, { useEffect, useState } from 'react'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ServicePage from './pages/Service'
import ExaminationPage from './pages/Examination'
import TestimoniaPage from './pages/Testimonia'
import ContactPage from './pages/Contact'
import Sidebar from './components/sidebar/Sidebar'
import MenuIcon from '@mui/icons-material/Menu';



const Layout: React.FC = () => {
  const [drawerActive, setDrawerActive] = useState<boolean>(false)
  const [sidebar, setSidebar] = useState<boolean>(false)

  const handleScroll = () => {
    if(window.scrollY > 600){
      setSidebar(true)
    }else{
      setSidebar(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures that the effect runs only on mount and unmount


  const openDrawer =()=>{
    setDrawerActive(true)
  }

  return (
    <main>
        <div id='menuholder' className={sidebar ? 'menu2' : 'menu'} onClick={openDrawer} style={{cursor: 'pointer'}}>
            <div id='menuIcon' className='menuHolder2'>
                <MenuIcon/>
            </div>
        </div>
        <Sidebar sidebar={sidebar}  drawerActive={drawerActive} setDrawerActive={setDrawerActive}/> 
        <HomePage setDrawerActive={setDrawerActive}/>
        <AboutPage />
        <ServicePage />
        <ExaminationPage />
        <TestimoniaPage />
        <ContactPage />
    </main>
   
  )
}

export default Layout

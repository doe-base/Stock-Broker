import React, { useState } from 'react'
import useStyles from '../../styles/sidebar';
import { RiCloseFill } from 'react-icons/ri'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';


interface MyComponentProps {
    sidebar: boolean;
    drawerActive: boolean;
    setDrawerActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<MyComponentProps> = ({ sidebar, drawerActive, setDrawerActive }) => {
    const classes = useStyles({ drawerActive })

    function closeDrawer(){
        setDrawerActive(false)
    }

    return (
        <aside className={classes.aside} style={{ 
            transform: `${drawerActive ? 'translateX(0)' : 'translateX(100%)'}`,
            display: `${ window.innerWidth < 959 || sidebar ? 'block' : 'none'}`,
        }}>
            <section className={classes.asideInner}>
                <nav className={classes.nav} onClick={()=> closeDrawer()} style={{cursor: 'pointer'}}>
                    <div>
                        <span className={classes.navSpan}>KAITLIN ROSE STERMBERG</span>
                    </div>
                    <div className={classes.navIconHolder}>
                        <RiCloseFill className={classes.navIcon}/>
                    </div>
                </nav>

                <div>

                    <a href='#home' id='links' className={classes.links} onClick={()=> closeDrawer()}>
                        <span id='linksSpan' className={classes.linksSpan}>01.</span>
                        <p className={classes.linksP}>Home</p>
                    </a>
                    <a href='#about' id='links' className={classes.links} onClick={()=> closeDrawer()} style={{borderTop: '1px solid rgba(255, 255, 255, 0.04)'}}>
                        <span id='linksSpan' className={classes.linksSpan}>02.</span>
                        <p className={classes.linksP}>About</p>
                    </a>
                    <a href='#services' id='links' className={classes.links} onClick={()=> closeDrawer()}>
                        <span id='linksSpan' className={classes.linksSpan}>03.</span>
                        <p className={classes.linksP}>Services</p>
                    </a>
                    <a href='#experience' id='links' className={classes.links} onClick={()=> closeDrawer()}>
                        <span id='linksSpan' className={classes.linksSpan}>04.</span>
                        <p className={classes.linksP}>My Experience</p>
                    </a>
                    <a href='#contact' id='links' className={classes.links} onClick={()=> closeDrawer()}>
                        <span id='linksSpan' className={classes.linksSpan}>05.</span>
                        <p className={classes.linksP}>Contact Me</p>
                    </a>
                    

                    <div className={classes.gameLinksHolder}>
                        <span className={classes.navSpan2}>Stock Broker | Financial Consultant</span>
                    </div>

                </div>
            </section>
        </aside>
    )
}

export default Sidebar
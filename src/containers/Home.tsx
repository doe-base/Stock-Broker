import React, { useState, useEffect, useRef } from 'react'
import { styled } from '@mui/system'
import useStyles from '../styles/home';
import { Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CountUp from 'react-countup';


interface MyComponentProps {
    setDrawerActive: React.Dispatch<React.SetStateAction<boolean>>;
  }

const HomeContainer: React.FC<MyComponentProps> = ({ setDrawerActive }) => {

    const [showLinks, setShowLinks] = useState(false);
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(9499900)
    const [count3, setCount3] = useState(0)
    const [count4, setCount4] = useState(0)


    // const linksContainerRef = useRef<HTMLInputElement>(null);
    // const linksRef = useRef<HTMLUListElement>(null);
    // const toggleLinks = () => {
    //     setShowLinks(!showLinks);
    // };
    // useEffect(() => {
    //     const linksHeight = linksRef.current?.getBoundingClientRect().height;
    //     if (showLinks) {
    //         linksContainerRef.current!.style.height = `${linksHeight}px`;
    //     } else {
    //         linksContainerRef.current!.style.height = '0px';
    //     }
    // }, [showLinks]);

    const Nav = styled('section')({
        position: 'absolute',
        top: '0',
        right: '0',
        left: '0',
        zindex: '9',
    })


    const Hero = styled('section')({
        width: '100%',
    })

    const Foot = styled('section')({   

    })


    const openDrawer =()=>{
        setDrawerActive(true)
      }

    const classes = useStyles()

  return (
    <main className={classes.homepage} id='home'>
        
        <Nav>
            <div className={classes.nav}>
                <div className={classes.navInner}>
                    
                    <div className={classes.navcontainer}>
                        <div>
                            <a className="navbar-brand" href="#home"><span>K</span>aitlin</a>
                        </div>
                        {/* <div className={classes.smallnav} onClick={ toggleLinks }>
                            <span className={classes.menuBtn}>
                                <span className={classes.menuText}>menu</span>
                                <span>
                                    <MenuIcon style={{marginBottom: '-4px'}}/>
                                </span>
                            </span>
                            <div className={showLinks ? 'links-container' : 'links-container show-container'} ref={linksContainerRef}>
                                <ul className='links' ref={linksRef}>
                                    <li className={classes.smallnavlia}><a href='#home'>Home</a></li>
                                    <li className={classes.smallnavlia}><a href='#about'>About</a></li>
                                    <li className={classes.smallnavlia}><a href='#services'>Services</a></li>
                                    <li className={classes.smallnavlia}><a href='#experience'>My Experience</a></li>
                                    <li className={classes.smallnavlia}><a href='#contact'>Contact Me</a></li>
                                </ul>
                            </div>
                        </div> */}
                        <span className={classes.menuBtn} onClick={()=> openDrawer()}>
                            <span className={classes.menuText}>menu</span>
                            <span>
                                <MenuIcon style={{marginBottom: '-4px', marginLeft: '2px'}}/>
                            </span>
                        </span>
                       
                        <div className={classes.navLinks}>
                            <div className={classes.navLinksInner}>
                                <nav>
                                    <ul style={{textAlign: 'right'}}>
                                        <li className={classes.navli}>
                                            <h2 className={classes.navlink}><a className="hover-3" href="#home">Home</a></h2>
                                        </li>

                                        <li className={classes.navli}>
                                            <h2 className={classes.navlink}><a className="hover-3" href="#about">About Me</a></h2>
                                        </li>

                                        <li className={classes.navli}>
                                            <h2 className={classes.navlink}><a className="hover-3" href="#services">Services</a></h2>
                                        </li>

                                        <li className={classes.navli}>
                                            <h2 className={classes.navlink}><a className="hover-3" href="#experience">My Experience</a></h2>
                                        </li>

                                        <li className={classes.navliButton}>
                                            <a href='#contact' className="btn btn-1 hover-filled-slide-right">
                                                <span>Contact Me</span>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>

                </div>
            </div>
                    

                </div>
            
        </Nav>
        
        <Hero>
            <Grid container style={{alignItems: 'center', justifyContent: 'space-between'}}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div className={classes.textSection}>
                        <p className={classes.pblock}>STOCK BROKER</p>
                        <h1 className={classes.h1block}>Kaitlin Rose Sternberg</h1>
                        <p className={classes.p2block}>Stock Broker and Investment Adviser in the United States. I can guide you to making consistent profit in the financial markets.</p>
                        <a href='#about' className="btn btn-2 hover-filled-slide-right">
                            <span>See More</span>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={5.5}>
                    <div className={classes.heroImg}><img src="/imgs/img6.jpg" alt="" style={{width: '100%'}}/></div>
                </Grid>
            </Grid>
        </Hero>

        <Foot className={classes.foot}>
            <Grid container>

                <Grid item xs={0} sm={0} md={0} lg={1}>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={11}>
                    <div className={classes.footblock}>
                        {/* <Grid xs={0} sm={0}  md={3} lg={3} className={classes.textblock1}>
                            <div className={classes.imgblock}>
                                <img src="/imgs/st2.jpg" alt=""  style={{width: '100%'}}/>
                            </div>
                        </Grid> */}

                        <div>
                            <div className={classes.textblock}>
                                <span className={classes.footspan}><CountUp start={count} end={20} duration={3} onEnd={() => setCount(20)}/>+</span>
                                <p className={classes.footp}>Years of experience</p>
                            </div>
                        </div>
                
                        <div>
                            <div className={classes.textblock2}>
                                <span className={classes.footspan}>$<CountUp start={count2} end={9500000} duration={3} onEnd={() => setCount2(9500000)}/>+</span>
                                <p className={classes.footp}>Profits Accumulated</p>
                            </div>
                            <div className={classes.textblock22}>
                                <span className={classes.footspan}>$<CountUp start={count3} end={9} duration={3} onEnd={() => setCount3(9)}/>M+</span>
                                <p className={classes.footp}>Profits Accumulated</p>
                            </div>
                        </div>
                    
                        <div>
                            <div className={classes.textblock3}>
                                <span className={classes.footspan}><CountUp start={count4} end={53} duration={3} onEnd={() => setCount4(53)}/>+</span>
                                <p className={classes.footp}>State Licenses</p>
                            </div>
                        </div>
                    </div>
                </Grid>
                

            </Grid>
        </Foot>

    </main>
  )
}

export default HomeContainer

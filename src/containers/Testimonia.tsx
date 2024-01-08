import React, { useRef } from 'react'
import { styled } from '@mui/system'
import { Grid } from '@material-ui/core'
import useStyles from '../styles/testimonia'
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { IoIosQuote } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }



const TestimoniaContainer: React.FC =()=>{
    const classes = useStyles()
    const sliderRef = useRef<Slider>(null);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
          ]


      };
      const handleNext = () => {
        // Call slickNext method to move to the next slide
        if(sliderRef.current != null){
            sliderRef.current.slickNext();
        }
      };
    
      const handlePrev = () => {
        // Call slickPrev method to move to the previous slide
        if(sliderRef.current != null){
            sliderRef.current.slickPrev();
        }
      };

    const Testimonia = styled('section')({
        padding: '4rem 0',
        background: 'linear-gradient(180deg, rgba(243, 236, 255, 0.4) 0%, rgba(243, 236, 255, 0) 100%)',

        // position: 'relative',
        // background: 'url(imgs/bg.jpg)',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    })
    const Overlay = styled('section')({
        // padding: '4rem 0',
        // width: '100%', height: '100%',
        // backgroundColor: '#28AE60',
        // zIndex: '0'
    })

    return (
        <Testimonia id='testimonia'>
            <Overlay>
                <Grid container className={classes.container}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} style={{marginBottom: '3rem',}}>
                            <div className={classes.textSectionTitle}>
                                <span className={classes.textSectionTitleSpan}>My Top Clients</span>
                                <h2 className={classes.textSectionTitleH2}>Testimonias of some of Satisfied Clients.</h2>
                            </div>
                            <div className={classes.buttonHolder}>
                                <div className={classes.button} style={{marginRight: '0.6rem'}} onClick={handlePrev}>
                                    <span><FiArrowLeft /></span>
                                </div>
                                <div className={classes.button} onClick={handleNext}>
                                    <span><FiArrowRight /></span>
                                </div>
                            </div>
                        </Grid>
                </Grid>

                <Grid container className={classes.container2}>
                    <Grid item xs={11}>
                        <Slider ref={sliderRef} {...settings}>
                            <div className='card'>
                                <div className={classes.cardTop}>
                                    <div>
                                        <h1 className={classes.cardName}>Tommy Silvestri</h1>
                                        <span className={classes.cardJob}>Business Contractor</span>
                                    </div>
                                    <div className='cardImg' style={{background: 'url(/imgs/download3.jpg)'}}></div>
                                </div>
                                
                                <div style={{color: '#bbb'}}>
                                    <span><IoIosQuote style={{color: '#28AE60', fontSize: '1.8rem'}}/></span>
                                    <p style={{color: '#444'}}>Kaitlin helped my family out at a really bad period back in 2014. I was out of a job but I had managed to save up to $50k, I met her in a financial coaching seminar and within months, my portfolio had accumulated profits of up to $85k!</p>
                                </div>
                            </div>

                            <div className='card'>
                                <div className={classes.cardTop}>
                                    <div>
                                        <h1 className={classes.cardName}>Savanna Nguyen</h1>
                                        <span className={classes.cardJob}>I.T Expert</span>
                                    </div>
                                    <div className='cardImg' style={{background: 'url(/imgs/download2.jpg)'}}></div>
                                </div>
                                
                                <div style={{color: '#bbb'}}>
                                    <span><IoIosQuote style={{color: '#28AE60', fontSize: '1.8rem'}}/></span>
                                    <p style={{color: '#444'}}>She's very experienced with her work and is also very adaptable with respect to the financial markets. if you’re a newbie and you're still looking for an investment adviser. Kaitlin Rose Sternberg is definitely well qualified for the job.</p>
                                </div>
                            </div>

                            <div className='card'>
                                <div className={classes.cardTop}>
                                    <div>
                                        <h1 className={classes.cardName}>Irene S. Mika</h1>
                                        <span className={classes.cardJob}>Event Planner</span>
                                    </div>
                                    <div className='cardImg' style={{background: 'url(/imgs/download.jpg)'}}></div>
                                </div>
                                
                                <div style={{color: '#bbb'}}>
                                    <span><IoIosQuote style={{color: '#28AE60', fontSize: '1.8rem'}}/></span>
                                    <p style={{color: '#444'}}>Kaitlin Rose is an amazing person. She introduced me to profit accumulation strategies in the financial markets and I've been making huge consistent profits especially in digital assets market.</p>
                                </div>
                            </div>

                            <div className='card'>
                                <div className={classes.cardTop}>
                                    <div>
                                        <h1 className={classes.cardName}>Santos Asayed</h1>
                                        <span className={classes.cardJob}>Professional Athlete</span>
                                    </div>
                                    <div className='cardImg' style={{background: 'url(/imgs/download4.jpg)'}}></div>
                                </div>
                                
                                <div style={{color: '#bbb'}}>
                                    <span><IoIosQuote style={{color: '#28AE60', fontSize: '1.8rem'}}/></span>
                                    <p style={{color: '#444'}}>I started learning about FOREX and Crypto trading on my own but I was moving at a really slow pace. I got introduced to Kaitlin and I became an expert stock trader within 8 months.</p>
                                </div>
                            </div>
                        </Slider>
                    </Grid>
                </Grid>
            </Overlay>

                    
            
            
        </Testimonia>
    )
}

export default TestimoniaContainer
import React from 'react'
import { styled } from '@mui/system'
import { Grid } from '@material-ui/core'
import useStyles from '../styles/about'


const AboutContainer: React.FC =()=>{
    const classes = useStyles()

    const About = styled('section')({
        
    })

    return (
        <About id='about' className={classes.about}>
            <Grid container className={classes.container}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div className={classes.aboutTextSection}>
                        <div className={classes.textSectionTitle}>
                            <h2 className={classes.textSectionTitleH2}>KAITLIN ROSE STERMBERG<br /> <span className={classes.textSectionTitleSpan}>Stock Broker | Financial Consultant</span></h2>
                        </div>

                        <p className={classes.textSectionP}>I have accumulated eleven(11) years of Financial trading, Stock analysis & Brokerage experience within seven(7) prestigious firms in the United States. I have passed five(5) brokerage examinations and I am currently registered and licensed in twenty-two(22) States.
I have a stellar track record of meeting & exceeding the financial targets of my numerous clients, you can read some client reviews below.</p>
                        <p className={classes.textSectionP}>As long as you are willing to learn how to take calculated risks, I would show you how to elaborately design and implement multiple trading strategies to ensure consistent profit, I will invest my time and substantial experience in making sure you succeed financially.</p>

                        <a href='#contact' className="btn btn-2 hover-filled-slide-right">
                            <span>Contact Me</span>
                        </a>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <div style={{position: 'relative', paddingLeft: '1rem'}}>
                        <div className={classes.img1}>
                            <img src="/imgs/img6small.jpg" alt="" style={{width: '100%'}}/>
                        </div>
                        <div className={classes.img2}>
                            <img src="/imgs/imgbig.jpg" alt="" style={{width: '100%'}}/>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </About>
    )
}

export default AboutContainer
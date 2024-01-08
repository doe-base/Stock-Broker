import React from 'react'
import { styled, textAlign } from '@mui/system'
import { Grid } from '@material-ui/core'
import useStyles from '../styles/examination'
import TestimoniaContainer from './Testimonia'


const ExaminationContainer: React.FC =()=>{
    const classes = useStyles()

    const Holder = styled('section')({

    })
    const Examination = styled('section')({
    })

    const Experence = styled('section')({
    })

    return (
        <Holder className={classes.holder}>
            <Examination className={classes.examination} id='experience'>
                <Grid container className={classes.container} style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item xs={12} md={5}>
                        <div className={classes.imgSection} style={{position: 'relative', marginBottom:'3rem'}}>
                            <img src="/imgs/img11.jpg" alt="" style={{width: '100%'}}/>
                            <div className={classes.imgCap}>
                                <span className={classes.imgCapSpan}>SINCE 1998</span>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className={classes.aboutTextSection}>
                            <div className={classes.textSectionTitle}>
                                <span className={classes.textSectionTitleSpan}>Qualifications</span>
                                <h2 className={classes.textSectionTitleH2}>My Certifications & Examinations</h2>
                            </div>
                            <div style={{marginBottom: '2.8rem'}}>
                                <p className={classes.textSectionP} style={{marginBottom: '0.5rem'}}>Series 66 - Uniform Combined State Law Examination [Sep 21, 2009]</p>
                                <p className={classes.textSectionP} style={{fontWeight: '600', textTransform: 'uppercase'}}>State Securities Law Exam</p>
                                <div className={classes.line}></div>
                            </div>

                            <div style={{marginBottom: '2.8rem'}}>
                                <p className={classes.textSectionP} style={{marginBottom: '0.5rem'}}>Series 7 - General Securities Representative Examination [Apr 7, 2009]</p>
                                <p className={classes.textSectionP} style={{fontWeight: '600', textTransform: 'uppercase'}}>General Industry/Products Exam</p>
                                <div className={classes.line}></div>
                            </div>

                            <div style={{marginBottom: '2.8rem'}}>
                                <p className={classes.textSectionP} style={{marginBottom: '0.5rem'}}>SIE - Securities Industry Essentials Examination [Oct 1, 2018]</p>
                                <p className={classes.textSectionP} style={{fontWeight: '600', textTransform: 'uppercase'}}>General Industry/Products Exam</p>
                                <div className={classes.line}></div>
                            </div>

                            <div style={{marginBottom: '2.8rem'}}>
                                <p className={classes.textSectionP} style={{marginBottom: '0.5rem'}}>SIE - Securities Industry Essentials Examination [Oct 1, 2018]</p>
                                <p className={classes.textSectionP} style={{fontWeight: '600', textTransform: 'uppercase'}}>General Industry/Products Exam</p>
                                <div className={classes.line}></div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Examination>


            
            <Experence>
                <Grid container className={classes.container} style={{marginBottom: '2rem'}}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.textSectionTitle}>
                            <span className={classes.textSectionTitleSpan}>EXPERIENCE</span>
                            <h2 className={classes.textSectionTitleH2}>My Employment History</h2>
                        </div>
                    </Grid>
                </Grid>


                <Grid container className={classes.container2} style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item xs={12} md={9} style={{justifyContent: 'center', alignItems: 'center'}}>
                        <div className={classes.card}>
                            <div className={classes.cardTitleSec}>
                                <div>
                                    <p className={classes.cardTitlep}>2009 - Present (13 years)</p>
                                    <h3  className={classes.cardTitleh3}>MORGAN STANLEY (CRD#:149777)</h3>
                                </div>
                            </div>
                            <p  className={classes.cardp}>Stock Broker | Investment Adviser</p>
                        </div>

                        <div className={classes.card}>
                            <div className={classes.cardTitleSec}>
                                <div>
                                    <p className={classes.cardTitlep}>2009 - 2009 (Less than 1 year)</p>
                                    <h3  className={classes.cardTitleh3}>MORGAN STANLEY & CO. INCORPORATED (CRD#:8209)</h3>
                                </div>
                            </div>
                            <p  className={classes.cardp}>Stock Broker</p>
                        </div>

                        <div className={classes.card} style={{borderBottom: '1px solid #E2E2E2', paddingBottom: '2.6rem'}}>
                            <div className={classes.cardTitleSec}>
                                <div>
                                    <p className={classes.cardTitlep}>2011 - 2012(LESS THAN 1 YEAR)</p>
                                    <h3  className={classes.cardTitleh3}>CCO INVESTMENT SERVICES CORP. (CRD# 39550)</h3>
                                </div>
                            </div>
                            <p  className={classes.cardp}>Stock Broker</p>
                        </div>
                    </Grid>
                </Grid>
            </Experence>
        </Holder>
    )
}

export default ExaminationContainer
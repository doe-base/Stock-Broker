import React from 'react'
import { styled, textAlign } from '@mui/system'
import { Grid } from '@material-ui/core'
import useStyles from '../styles/service'


const ServiceContainer: React.FC =()=>{
    const classes = useStyles()

    const Service = styled('section')({
        backgroundColor: '#ffffff',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.8' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(28.05) translate(-964.35 -723.26)'%3E%3Cuse fill='%23fcfcfc' href='%23s' y='2'/%3E%3Cuse fill='%23fcfcfc' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='2'/%3E%3Cuse fill='%23f7f7f7' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(28.05) translate(-964.35 -723.26)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(28.05) translate(-964.35 -723.26)'%3E%3Cg fill='%23f5f5f5'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(28.05) translate(-964.35 -723.26)'%3E%3Cg fill='%23f2f2f2'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(28.05) translate(-964.35 -723.26)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23efefef'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(28.05) translate(-964.35 -723.26)'%3E%3Cg fill='%2328AE60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(28.05) translate(-964.35 -723.26)'%3E%3Cg fill='%2328AE60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(28.05) translate(-964.35 -723.26)'%3E%3Cg fill='%2328AE60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
        backgroundSize: 'cover',
    })

    return (
        <Service className={classes.service} id='services'>
            <Grid container style={{justifyContent: 'center', alignItems: 'center'}}>
                <Grid item xs={12} md={6}>
                    <div className={classes.textSectionTitle}>
                        <span className={classes.textSectionTitleSpan}>Services I Offer</span>
                        <h2 className={classes.textSectionTitleH2}>Building a Brighter financial Future &amp; Good Support.</h2>
                    </div>
                </Grid>
            </Grid>
            
            <Grid container className={classes.container}>
                <Grid item xs={12} md={6}>
                    <div className={classes.card}>
                        <div className={classes.cardIconSec}>
                            <img src="/imgs/financial.png" alt="" className={classes.icon}/>
                        </div>
                        <div className={classes.cardTextSec}>
                            <h3 className={classes.cardTitle}>Stock Brokerage & Investment Advisory</h3>
                            <p style={{color: '#64676c', fontSize: '1.037rem', letterSpacing: '1px', lineHeight: '1.3', fontFamily: 'inherit'}}>With 11 years of experience buying and selling securities on behalf of my clients, individual and  institutional investors, I have amass over 9.5 millon USD in this time. Helping over 600 plus clients develop and implement investment strategies aligned with their financial goals and risk tolerance</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.card}>
                    <div className={classes.cardIconSec}>
                            <img src="/imgs/financial-advisor.png" alt="" className={classes.icon}/>
                        </div>
                        <div className={classes.cardTextSec}>
                            <h3 className={classes.cardTitle}>Financial Consulting & Auditing</h3>
                            <p style={{color: '#64676c', fontSize: '1.037rem', letterSpacing: '1px', lineHeight: '1.3', fontFamily: 'inherit'}}>I offer consultance and guidance on a variety of financial matters, including investments, mergers and acquisitions, risk management, financial planning, and  providing an independent and objective assessment of an 's financial health and solutions.</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <div className={classes.card}>
                        <div className={classes.cardIconSec}>
                            <img src="/imgs/cryptocurrency.png" alt="" className={classes.icon}/>
                        </div>
                        <div className={classes.cardTextSec}>
                            <h3 className={classes.cardTitle}>Digital Assets Trading & Cryptocurrency</h3>
                            <p style={{color: '#64676c', fontSize: '1.037rem', letterSpacing: '1px', lineHeight: '1.3', fontFamily: 'inherit'}}>Buying, Selling and Manangment of Digital Assets including Crpotocurrency, Non-fungible tokens (NFTs) and more.</p>
                        </div>
                    </div>
                </Grid>
                
                <Grid item xs={12} md={6}>
                    <div className={classes.card}>
                        <div className={classes.cardIconSec}>
                            <img src="/imgs/tax.png" alt="" className={classes.icon}/>
                        </div>
                        <div className={classes.cardTextSec}>
                            <h3 className={classes.cardTitle}>Interpreting financial reports</h3>
                            <p style={{color: '#64676c', fontSize: '1.037rem', letterSpacing: '1px', lineHeight: '1.3', fontFamily: 'inherit'}}>Analyzing balance sheet, income statement, cash flow statement, and statement of changes in equity. Finding data that is not seen by any other Autitor </p>
                        </div>
                    </div>
                </Grid>
    
            </Grid>
        </Service>
    )
}

export default ServiceContainer
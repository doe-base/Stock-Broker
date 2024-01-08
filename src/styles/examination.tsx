import { makeStyles, Theme, createStyles } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        holder: {
            padding: '8.5rem 0',

            [theme.breakpoints.down('md')]: {
                padding: '5rem 0',
            },
        },
        examination: {
            paddingBottom: '7.37rem',

            [theme.breakpoints.down('md')]: {
                padding: '3.4rem 0',
            },
        },
        container: {
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
            justifyContent: 'space-between !important',
            maxWidth: '1200px',

            [theme.breakpoints.down('md')]: {
                maxWidth: '960px',
                paddingRight: '1.2rem',
                paddingLeft: '1.2rem',
            },

            [theme.breakpoints.down('sm')]: {
                maxWidth: '720px',
                // maxWidth: '520px',
            },
        },
        container2: {
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
            justifyContent: 'center !important',
            maxWidth: '1200px',

            [theme.breakpoints.down('md')]: {
                maxWidth: '960px',
                paddingRight: '1.2rem',
                paddingLeft: '1.2rem',
            },

            [theme.breakpoints.down('sm')]: {
                maxWidth: '720px',
                // maxWidth: '520px',
            },
        },
        imgSection: {
            "&:before": {
                position: 'absolute',
                content: "''",
                height: '100%',
                borderRight: '1.475rem solid #28AE60',
                right: '0',
                zIndex: 0,
                top: '0',
            },
        },
        imgCap: {
            position: 'absolute',
            bottom: '7.0625rem',
            right: '-6.5625rem',
            transform: 'rotate(-90deg)',
        },
        imgCapSpan: {
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '1.1rem 3.4375rem',
            fontSize: '1.675rem',
            color: '#000a2d',
            textTransform: 'uppercase',
            fontWeight: 700,
        },
        aboutTextSection: {
            marginBottom: '3rem',
            paddingRight: '2rem',

            [theme.breakpoints.down('sm')]: {
                paddingRight: '0rem',
            },
        },
        textSectionTitle: {
            marginBottom: '2.1rem'
        },
        textSectionTitleSpan: {
            paddingRight: '35px',
            marginBottom: '1.87rem',
            display: 'block',
            color: '#28AE60',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '18px',
            fontWeight: 600,

            [theme.breakpoints.down('sm')]: {
                marginBottom: '1.27rem',
                fontSize: '1rem',
            },
        },
        textSectionTitleH2: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: '2.5rem',
            display: 'block',
            color: '#000a2d',
            fontWeight: 700,
            lineHeight: '1.3',

            [theme.breakpoints.down('sm')]: {
                fontSize: '2rem',
                fontWeight: 700,
            },
        },
        textSectionP: {
            fontSize: '1.02rem',
            color: '#64676c',
            lineHeight: '1.6',
        },
        // fieldLeft: {
        //     paddingRight: '2.2rem !important',
        //     [theme.breakpoints.down('sm')]: {
        //         paddingRight: '0rem !important',
        //     },
        // },
        // fieldRight: {
        //     paddingLeft: '2.2rem',
        //     [theme.breakpoints.down('sm')]: {
        //         paddingLeft: '0rem !important',
        //     },
        // }
        card: {
            borderTop: '1px solid #E2E2E2',
            padding: '1rem 0',
            marginBottom: '1.6rem'
        },
        cardTitleSec: {
            paddingTop: '1.2rem',
            paddingBottom: '0.9rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        cardTitlep: {
            fontWeight: 500,
            fontSize: '1.1rem',
            marginBottom: '0.5rem',
            color: '#64676c',

            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem',
            },
        },
        cardTitleh3: {
            color: '#000a2d',
            fontWeight: 600,
            fontSize: '1.8rem',
            marginBottom: '1.2rem',

            [theme.breakpoints.down('sm')]: {
                fontSize: '1.6rem',
                marginBottom: '0.4rem',
            },
        },
        cardTitleSpan: {
            textDecoration: 'underline',
        },
        cardp: {
            fontWeight: 400,
            fontSize: '1.2rem',
            color: '#28AE60',

            [theme.breakpoints.down('sm')]: {
                fontSize: '1.1rem',
            },
        },
        line: {
            background: '#28AE60',
            borderRadius: '4px',
            height: '8px',
        }
    })
)

export default useStyles
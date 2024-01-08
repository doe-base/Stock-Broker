import { makeStyles, Theme, createStyles } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        about: {
            padding: '12rem 0',
            paddingBottom: '7rem',

            [theme.breakpoints.down('md')]: {
                padding: '7rem 0',
            paddingBottom: '7rem',
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
            fontSize: '1.6rem',
            fontWeight: 500,

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
            fontWeight: 600,
            lineHeight: '1.3',
        },
        textSectionP: {
            fontSize: '1.1rem',
            color: '#64676c',
            lineHeight: '1.6',
            marginBottom: '2.1rem',
            paddingRight: '3rem',

            [theme.breakpoints.down('sm')]: {
                paddingRight: '0rem',
            },
        },
        ablock: {
            background: '#0b1416',
            padding: '1.87rem 2.1rem',
            boxShadow: '0px 10px 30px 0px rgba(249, 248, 249, 0.1)',
            borderRadius: '5px',
            textTransform: 'uppercase',
            color: '#fff',
            fontSize: '1rem', fontWeight: 600,
            cursor: 'pointer',
            display: 'inline-block',
            letterSpacing: '1px',
            lineHeight: '0',
            marginTop: '10px',
            transition: 'color 0.4s linear',
            position: 'relative',
            zIndex: 1,
            border: '0',
            overflow: 'hidden',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            userSelect: 'none',
    
            [theme.breakpoints.down('sm')]: {
                padding: '1.27rem 1.8rem',
            },
        },

        img1: {
            position: 'absolute',
            zIndex: 1,
            left: '-9%',
            top: '14.8125rem',

            [theme.breakpoints.down('sm')]: {
                display:  'none'
            },
        },
        img2: {
            position: 'absolute',
            top: '-47px',
            right: '0',
            zIndex: 0,
            [theme.breakpoints.down('sm')]: {
                position: 'unset',
            },
            
        }
    })
)

export default useStyles
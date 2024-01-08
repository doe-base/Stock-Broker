import { makeStyles, Theme, createStyles } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        container: {
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
            justifyContent: 'space-between !important',
            maxWidth: '1200px',
            marginBottom: '3rem',

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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            color: '#999',

            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
            },
        },
        item1: {
            [theme.breakpoints.down('sm')]: {
                marginBottom: '0.5rem'
            },
        },
        item2: {
            [theme.breakpoints.down('sm')]: {
                marginBottom: '0.5rem'
            },
        },
        item3: {
            [theme.breakpoints.down('sm')]: {
                marginBottom: '0.5rem'
            },
        },
    
        aboutTextSection: {
            marginBottom: '3rem',
            paddingRight: '2rem'
        },
        textSectionTitle: {
            marginBottom: '2.1rem'
        },
        textSectionTitleSpan: {
            fontSize: '1.1rem',
            fontWeight: 500,
            marginBottom: '1.6rem',
            color: '#28AE60',
            fontFamily: "'Poppins', sans-serif",
            display: 'inline-block',
        },
        textSectionTitleH2: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: '2.5rem',
            display: 'block',
            color: '#fff',
            fontWeight: 700,
            lineHeight: '1.3',

            [theme.breakpoints.down('sm')]: {
                fontSize: '2rem',
                fontWeight: 700,
            },
        },
        textSectionP: {
            fontSize: '1.1rem',
            color: '#999',
            lineHeight: '1.6',
            marginBottom: '2.1rem',
            paddingRight: '3rem',
        },
        formTitle: {
            display: 'block',
            marginBottom: '1rem',
            color: '#28AE60',
            fontWeight: 600, fontSize: '1.3rem'
        },
        formSection: {
            width: '100%',
            marginBottom: '2.5rem',
        },
        formSection1: {
            width: '100%',
            marginBottom: '2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        },
        textArea: {
            width: '100%', 
            maxWidth: '100%', 
            maxHeight: '200px',
            backgroundColor: '#1d1e21',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.4375em',
            letterSpacing: '0.00938em',
            color: '#fff',
            boxSizing: 'border-box',
            position: 'relative',
            borderRadius: '4px',
            padding: '16.5px 14px',
        },
        textField:{
            width: '32% !important',
            marginBottom: '1rem !important',

            [theme.breakpoints.down('xs')]: {
                width: '48% !important',
            },
        },
        footlinks: {
            margin: '0 0.6rem',
            transition: 'all 0.3s linear',
            "&:hover": {
                color: '#fff'
            }
        }
    })
)

export default useStyles
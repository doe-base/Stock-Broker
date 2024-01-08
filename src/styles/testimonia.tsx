import { makeStyles, Theme, createStyles } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
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
            justifyContent: 'space-between !important',
            maxWidth: '1200px',

            [theme.breakpoints.down('md')]: {
                maxWidth: '960px',
                
            },

            [theme.breakpoints.down('sm')]: {
                maxWidth: '720px',
                paddingRight: '1.2rem',
                paddingLeft: '1.2rem',
            },
        },
        textSectionTitle: {
            marginBottom: '2rem',
            textAlign: 'left',
        },
        textSectionTitleSpan: {
            fontSize: '1rem',
            fontWeight: 500,
            marginBottom: '1.3rem',
            color: '#28AE60',
            fontFamily: "'Poppins', sans-serif",
            display: 'inline-block',
        },
        textSectionTitleH2: {
            fontFamily: "'Poppins', sans-serif",
            fontSize: '2rem',
            display: 'block',
            color: '#000a2d',
            fontWeight: 700,
            lineHeight: '1.3',
        },
        buttonHolder: {
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
        },
        button: {
            width: '2.3rem', height: '2.3rem',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            border: '1px solid #aaa',
            color: '#777',
            cursor: 'pointer',
        },
        cardName: {
            fontWeight: 500,
            fontSize: '1.429rem',
            lineHeight: '1.4',
            color: '#000a2d',
        },
        cardJob: {
            fontSize: '1rem',
            color: '#444',
            textDecoration: 'underline',
        },

        cardTop: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column-reverse',
                marginBottom: '1rem',
            },
        }
    
    })
)

export default useStyles
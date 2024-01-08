import { makeStyles, Theme, createStyles } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        service: {
            padding: '8.5rem 0',

            [theme.breakpoints.down('md')]: {
                padding: '5rem 0',
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
        textSectionTitle: {
            marginBottom: '6rem',
            textAlign: 'center',

            [theme.breakpoints.down('md')]: {
                marginBottom: '4rem',
            },
            [theme.breakpoints.down('md')]: {
                marginBottom: '3.4rem',
            },
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

        card: {
            display: 'flex',
            padding: '1.2rem',

            [theme.breakpoints.down('md')]: {
                padding: '1rem 0.5rem',
                marginBottom: '1.4rem'
            },

            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
            },
        },
        cardIconSec: {
            width: '4rem', 
            marginRight: '1.2rem', 
            flex: 0.55,

            [theme.breakpoints.down('xs')]: {
                display: 'none', 
            },
        },
        cardTextSec: {
            flex: 3
        },
        icon: {
            width: '100%',
            filter: 'invert(51%) sepia(17%) saturate(3137%) hue-rotate(102deg) brightness(102%) contrast(69%)',
        },
        cardTitle: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: '1.674rem',
            lineHeight: '1.3',
            marginBottom: '0.5rem',
            color: '#000a2d',
        }
    })
)

export default useStyles
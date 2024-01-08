import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


// Define the custom styles using makeStyles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homepage: {
        width: '100%',
        background: 'url(/imgs/background.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        paddingTop: '140px',

        [theme.breakpoints.down('sm')]: {
            paddingTop: '110px',
         },  
    },
    nav: {
        padding: '0px 5rem',

        [theme.breakpoints.down('sm')]: {
            padding: '1rem 2rem',
         },   
    },
    smallnav: {
        width: '100%',
        background: '#4c4c4c',
        display: 'none',
        padding: '0.3rem',
        zIndex: 10,

        [theme.breakpoints.down('sm')]: {
            display: 'block',
         },   
    },
    menuBtn: {
        display: 'none',
        fontFamily: "'Poppins', sans-serif",
        color: '#fff',
        textShadow: '0 1px 1px rgba(255,255,255,.75)',
        borderRadius: '4px',
        backgroundColor: '#1d1e21',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.438rem 0.625rem',
        lineHeight: '1.125rem',
        
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
        },
    },
    menuText: {
        display: 'block',
        lineHeight: '1.188rem',
        float: 'left',
        color: '#fff',
        fontWeight: 500,
        textShadow: '0 1px 3px #000',
        textTransform: 'lowercase',
    },
    smallnavUl: {
        clear: 'both',
        color: '#fff',
        margin: '0',
        fontFamily: "'Rubik', sans-serif",
        fontSize: '0.875em',
        listStyle: 'none',
        overflow: 'hidden',
        padding: 0,
        display: 'none'
    },
    smallnavlia: {
        textecoration: 'none',
        color: '#fff',
        padding: '5px 10px',
        margin: '2px 5px',
    },
    navInner: {
        width: '100%',
        // paddingRight: '15px',
        // paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    navcontainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        [theme.breakpoints.down('sm')]: {
            // alignItems: 'baseline',
            // flexDirection: 'column'
        },
    },
    logo: {
        outline: 'medium none',
        userSelect: 'none',
    },
    navLinks: {
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'flex-end !important',
        
        [theme.breakpoints.down('sm')]: {
            display: 'none !important',
         },

    },
    navLinksInner: {
        display: 'block !important',
    },
    navli: {
        display: 'inline-block',
        position: 'relative',
        zIndex: 1,
        listStyle: 'none',
        color: '#000'
    },
    navlink: {
        // color: '#28AE60',
        color: '#000',
        padding: '2.4375rem 0.625rem',
        display: 'block',
        fontFamily: "'Rubik', sans-serif",
        fontSize: '1.10rem', fontWeight: 600,
        transition: 'all 0.3s ease-out 0s',
        textTransform: 'capitalize',
        position: 'relative',
        margin: '0 1rem',
        textDecoration: 'none',

        // this
        [theme.breakpoints.down('md')]: {
            padding: '2rem 0.5rem',
            margin: '0 0.5rem',
         },
        
    },
    navliButton: {
        cursor: 'pointer',
        display: 'inline-block',
        letterSpacing: '1px',
        lineHeight: '0',
        marginLeft: '10px',
        zIndex: 1,
        whiteSpace: 'nowrap',
        userSelect: 'none',
    },
    heroImg: {
        // width: '100%', 
        // height: '100%', 
        // background: 'url(/imgs/woman.webp)', 
        // backgroundSize: 'cover'
    },
    textSection: {
        paddingLeft: '16%',

        [theme.breakpoints.down('sm')]: {
            padding: '1rem',
            paddingTop: '0',
         },
    },
    pblock: {
        paddingRight: '35px',
        marginBottom: '1.87rem',
        display: 'block',
        color: '#28AE60',
        fontFamily: "'Rubik', sans-serif",
        fontSize: '18px',
        fontWeight: 600,

        [theme.breakpoints.down('sm')]: {
            marginBottom: '1.27rem',
            fontSize: '1rem',
        },
    },
    h1block: {
        fontSize: '5.3rem',
        fontWeight: 600,
        fontFamily: "'Rufina', serif",
        marginBottom: '1rem',
        color: '#000a2d',
        lineHeight: '1.2',
        display: 'block',

        [theme.breakpoints.down('lg')]: {
            fontSize: '4.3rem',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '3.7rem',

        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3rem',

        },
    },
    p2block: {
        marginBottom: '3rem',
        fontSize: '1.187rem',
        color: '#444',
        [theme.breakpoints.down('lg')]: {
            marginBottom: '2.7rem',
        },
        [theme.breakpoints.down('md')]: {
            marginBottom: '2rem',

        },
        [theme.breakpoints.down('sm')]: {
            marginBottom: '1.4rem',

        },
    },
    // ablock: {
    //     background: '#0b1416',
    //     padding: '1.87rem 2.1rem',
    //     boxShadow: '0px 10px 30px 0px rgba(249, 248, 249, 0.1)',
    //     borderRadius: '5px',
    //     textTransform: 'uppercase',
    //     color: '#fff',
    //     fontSize: '1rem', fontWeight: 600,
    //     cursor: 'pointer',
    //     display: 'inline-block',
    //     letterSpacing: '1px',
    //     lineHeight: '0',
    //     marginTop: '10px',
    //     transition: 'color 0.4s linear',
    //     position: 'relative',
    //     zIndex: 1,
    //     border: '0',
    //     overflow: 'hidden',
    //     textAlign: 'center',
    //     whiteSpace: 'nowrap',
    //     verticalAlign: 'middle',
    //     userSelect: 'none',

    //     [theme.breakpoints.down('sm')]: {
    //         padding: '1.27rem 1.8rem',
    //     },
    // },

    footblock: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        background: '#F5FBFF',
    },
    imgblock: {
        // display: 'block',
        // height: '100%',
        // fontSize: '1rem',
        // color: '#212529',
        // textAlign: 'left',
        // backgroundColor: '#fff',
        // backgroundImage: 'url(/imgs/woman2.webp)',
        // backgroundSize: 'cover',
    },
    textblock: {
        textAlign: 'center',
        fontSize: '3rem',
        color: '#2C2C2C',
        fontWeight: 400,

        padding: '2.5rem 0',

        [theme.breakpoints.down('sm')]: {
            padding: '1.3rem',
        },
    },
    textblock3: {
        textAlign: 'center',
        fontSize: '3rem',
        color: '#2C2C2C',
        fontWeight: 400,

        padding: '2.5rem 0',

        [theme.breakpoints.down('sm')]: {
            padding: '1.3rem',
        },
    },
    textblock2: {
        display: 'block',
        textAlign: 'center',
        fontSize: '3rem',
        color: '#2C2C2C',
        fontWeight: 400,

        padding: '2.5rem 0',

        [theme.breakpoints.down('sm')]: {
            display: 'none',
            padding: '1.3rem',
        },
    },
    textblock22: {
        display: 'none',
        textAlign: 'center',
        fontSize: '3rem',
        color: '#2C2C2C',
        fontWeight: 400,

        padding: '2.5rem 0',

        [theme.breakpoints.down('sm')]: {
            display: 'block',
            padding: '1.3rem',
        },
    },


    foot: {
        display: 'block',
    },
    footspan: {
        fontFamily: "'Poppins', sans-serif",
        lineHeight: '2.5rem',
        letterSpacing: '-.025em',

        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: '2.7rem',
        },

        [theme.breakpoints.down('sm')]: {
            fontSize: '1.7rem',
        },
    },
    footp: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: '1.225rem',
        lineHeight: '1.35rem',
        marginTop: '0.5rem',
        color: '#919191',
        fontWeight: 300,

        [theme.breakpoints.down('md')]: {
            fontSize: '1.025rem',
        },

        [theme.breakpoints.down('sm')]: {
            marginTop: '0rem',
            fontSize: '0.905rem',
        },
    },
    exprence: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },
    },
  })
);


export default useStyles
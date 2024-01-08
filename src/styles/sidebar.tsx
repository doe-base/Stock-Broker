import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


// Define the custom styles using makeStyles
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      aside: {
        boxShadow: ' -1px 1px 5px 0px rgba(0,0,0,0.75)',
        position: 'fixed',
        top: '0', right: '0',
        width: '20%', height: '100vh',
        minWidth: '290px',
        backgroundColor: '#1d1e21',
        zIndex: 200,
        transition: 'all 0.3s linear',
        overflow: 'auto !important',
        '&::-webkit-scrollbar':{
          display: 'none'
        }
      },
      asideInner: {
        padding: '3rem 2.4rem',
        color: '#fff'
      },
      nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2.7rem'
      },
      navSpan:{
        letterSpacing: '1.4px',
        color: '#28AE60',
      },
      navSpan2:{
        letterSpacing: '1.4px',
        color: '#aaa',
      },
      navIconHolder: {
        width: '1.8rem', height: '1.8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#000',
        borderRadius: '2px',
      },
      navIcon: {
        color: '#fff !important',
        fontSize: '1.4rem !important',
        fontWeight: 700
      },
      links:{
        display: 'flex',
        textDecoration: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
        padding: '1rem 0',
        transition: 'all 0.3s ease-in-out',

        '&:hover': {
          '& $linksSpan': {
            color: '#28AE60',
          },
        },
      },
      linksP: {
        color: 'white',
        display: 'block',
        paddingLeft: '1.5rem',
        letterSpacing: '1px'
      },
      linksSpan: {
        color: '#aaa',
        fontSize: '0.9rem',
        transition: 'all 0.3s ease-in-out',
      },


      linksSecond: {
        display: 'grid',
        textAlign: 'left',
        textDecoration: 'none',
        padding: '2rem 2rem'
      },
      gamelinks: {
        display: 'inline-block',
        color: '#999999',
        fontSize: '1.2rem',
        letterSpacing: '1px',
        marginBottom: '0.5rem',
        transition: 'all 0.3s ease-in-out',

        '&:hover':{
            color: '#ffffff'
        }
      },
      gameLinksHolder: {
        padding: '2rem 0'
      }
    })
)


export default useStyles
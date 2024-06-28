import theme from "../../styles/Theme";



const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: theme.spacing(1),
    padding: theme.spacing(2),
  },
  paper: {
    width: '60%',
    backgroundColor: 'white',
    padding:'50px'
  },
  leftSideColumn:{
    width:'50%',
    display: 'flex',
    marginLeft: '50px',
  },

  rightSideColumn:{
    width:'40%',
    marginTop: '35px',
  },
  description:{
    padding: 2,
    width: 'fit-content',
    backgroundColor: 'rgba(232,37,37,0.74)',
    color:'white' }
};

export default styles;

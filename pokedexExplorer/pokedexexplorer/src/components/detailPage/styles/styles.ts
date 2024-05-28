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
    alignItems: 'center'
  },
  rightSideColumn:{
    width:'40%',
  },
  description:{
    padding: 2,
    width: 'fit-content',
    margin: 'auto',
    backgroundColor: '#e82525',
    color:'white' }
};

export default styles;

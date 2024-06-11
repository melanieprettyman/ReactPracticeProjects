import theme from "../../styles/Theme";

const styles = {
    searchFieldContainer:{
      display: 'flex',
      alignItems: 'center',
      margin: '20px auto',
      width: '80%',
      maxWidth: '600px',
      backgroundColor: 'transparent',
      borderRadius: '4px',
    },
    searchField:{
        flex: 1,
        height: '40px',
        mr: 1,
        borderRadius: '4px',
        backgroundColor: 'white',
        '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',
        borderWidth: '2px'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
        borderColor: 'black'
        }
    },
    button:{
        backgroundColor: theme.palette.error.main,
        width: '40px',
        minWidth: '40px',
        padding: '8px 12px',
        '&:hover': {
            backgroundColor: '#8b0000',
        },
    },
    card:{
        cursor: 'pointer',
        transition: 'box-shadow 0.3s',
        '&:hover': {
            boxShadow: '0 0 8px 8px #ffffff',
        }
    },
    chip:{
        color: '#070707',
        fontSize: '0.875rem',
        height: 24,
        maxWidth:100,
        borderRadius: '4px'
    },
    flying:{
       background: 'linear-gradient(to right, #0033bd 50%, #808080 50%)'
    }
};
export default styles;
import theme from "../../styles/Theme";

const styles = {
    searchFieldContainer: {
        display: 'flex',
        alignItems: 'center',
        margin: '20px auto',
        width: '80%',
        maxWidth: '600px',
        backgroundColor: 'transparent',
        borderRadius: '4px',
    },
    searchField: {
        flex: 1,
        marginRight: theme.spacing(1),
        '& .MuiOutlinedInput-root': {
            height: '100%',
            backgroundColor: 'white',
            borderRadius: '4px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'black',
            borderWidth: '2px',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
            borderColor: 'black',
        },
        '& .MuiInputBase-input': {
            height: '100%',
        },
    },
    button: {
        backgroundColor: theme.palette.error.main,
        minWidth: '50px',
        height: '51px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        '&:hover': {
            backgroundColor: '#8b0000',
        },
    },
    card: {
        cursor: 'pointer',
        transition: 'box-shadow 0.3s',
        '&:hover': {
            boxShadow: '0 0 8px 8px #ffffff',
        }
    },
    chip: {
        color: '#070707',
        fontSize: '0.875rem',
        height: 24,
        maxWidth: 100,
        borderRadius: '4px',
    },
    flying: {
        background: 'linear-gradient(to right, #0033bd 50%, #808080 50%)',
    },
};

export default styles;

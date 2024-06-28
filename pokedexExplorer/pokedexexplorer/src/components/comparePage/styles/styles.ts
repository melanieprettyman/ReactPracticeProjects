import ComparisonItem from "../ComparisonItem";

const styles = {
    comparisonList:{
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 5
    },
    button:{
        color:'white', backgroundColor:'red', width:'20%', alignSelf: 'center',
        '&:hover': {backgroundColor: '#8b0000'},
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 2
    },
    toggle:{
          position: 'absolute',
          right: 0,
          top: 0,
          padding: '5px 10px',
          borderRadius: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          fontSize: '14px',
          userSelect: 'none'
    },
    comparisonItem: {
        width: '16.7%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 2,
    }
};

export default styles;
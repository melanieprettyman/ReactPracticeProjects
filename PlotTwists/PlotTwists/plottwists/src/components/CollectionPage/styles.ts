const styles = {
    pageContainer: {
        mt: 4,
        width: '70%',
        height: '100%'
    },
    pageStack: {
        paddingBottom: 2
    },
    synopsisContainer: {
        flexGrow: 1,
        width: '100%'
    },
    appBar: {
        backgroundColor: "white",
        height: 50,
        boxShadow: 'none'
    },
    toolBar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontWeight: 600,
        color: 'black'
    },
    synopsisInnerContainer: {
        flexGrow: 1,
        padding: 6
    },
    synopsisScrollBar:{
        maxHeight:1016,
        overflow:'auto'
    },
    buttonBase: {
        width: '100%',
        display: 'block',
        textAlign: 'initial',
    },
    cardContainer: {
        minWidth: 500,
        minHeight: 225,
        maxWidth: 500,
        maxHeight: 225,
        paddingBottom: 2
    },
    image: {
        height: 'auto',
        aspectRatio: '11 / 16',
        maxWidth: 180,
    },
    title: {
        fontWeight: 600,
        color: 'black',
        fontSize: 20,
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    authorBtn: {
        textAlign: 'left',
        justifyContent: 'flex-start',
        width: '100%'
    },
    author: {
        color: 'black',
        fontSize: 15,
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    icon: {
        color: "#5c5959",
        fontSize: 16
    },
    subtitle: {
        color: "#5c5959",
        fontSize: 14
    },
    synopsis: {
        color: 'black',
        fontSize: 15,
        paddingBottom: 1
    },
    completeTag: {
        background: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
        width: 100,
        height: 20,
        fontWeight: 'bold',
    },
    matureTag: {
        background: '#FF3F12',
        width: 100,
        height: 20,
        fontWeight: 'bold',
        color: 'white'
    }
};

export default styles;

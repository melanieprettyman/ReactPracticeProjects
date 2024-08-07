const styles = {
    pageContainer: {
        mt: 4,
        width: '70%',
        maxHeight: '70%'
    },
    topContainer: {
        width: '100%',
        height: '100%',
        mb: 4,
        minHeight: 350,
        padding: 2
    },
    tabContainer: {
        borderBottom: 1,
        borderColor: 'divider',
        paddingTop: 1
    },
    tabHeader: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    pannel: {
        mb: 2,
        padding: 2
    },
    tileBox: {
        position: 'relative',
        width: '100%',
        '&:hover': {
            '& .overlay': {display: 'flex'}
        }
    },
    cardContainer: {
        width: '100%',
        boxShadow: 0.5,
        transition: 'filter 0.3s',
        '&:hover': {
            filter: 'blur(4px)'
        }
    },
    cardMedia: {
        height: 'auto',
        aspectRatio: '11 / 16'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 1
    },
    icon: {
        color: "#5c5959",
        fontSize: 16
    },
    header: {
        color: "#5c5959",
        fontSize: 14
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    deleteBtn: {
        color: 'white',
        alignSelf: 'flex-end',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    tileBtn: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
};
export default styles;
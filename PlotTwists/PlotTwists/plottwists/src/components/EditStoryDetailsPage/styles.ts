const styles = {
    appBar: {
        backgroundColor: "white",
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
        height: 100
    },
    toolBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backArrow: {
        fontSize: 60,
        paddingTop: 1
    },
    pageContainer: {
        mt: 4,
        width: '70%',
        height: '100%'
    },
    tabContainer: {
        width: '100%',
        height: '100%',
        mb: 4,
        minHeight: 350
    },
    tabContainerBorder: {
        borderBottom: 1,
        borderColor: 'divider',
        paddingTop: 1
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    newPartBtn: {
        fontWeight: 'bold',
        width: 200
    },
    pannel: {
        mb: 2,
        padding: 2
    },
    imgContainer: {
        position: 'relative',
        minWidth: 300,
        maxWidth: 300
    },
    imgRatio: {
        width: '100%',
        height: 'auto',
        aspectRatio: '11 / 16'
    },
    editImgBtn: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.6)',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.9)',
        },
        color: 'primary.main',
        minHeight: 40,
        minWidth: 40,
        borderRadius: 0
    },
    partContainer: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
    },
    icon: {
        color: "#5c5959", fontSize: 16
    },
    subtitle: {
        color: "#5c5959", fontSize: 14
    },
    partIconBtn: {
        height: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }

};

export default styles;
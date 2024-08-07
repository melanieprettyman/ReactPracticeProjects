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
    btnContainer: {
        display: {xs: 'none', md: 'flex'}
    },
    pageContainer: {
        mt: 2,
        mb: 2,
        overflow: 'visible',
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    titleInputField: {
        width: 700,
        "& .MuiInput-input": {
            fontSize: 36,
        },
        '& .MuiInput-underline:before': {
            borderBottom: 'none',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
        },
        '& .MuiInput-underline:after': {
            borderBottom: 'none',
        }
    }
};
export default styles;
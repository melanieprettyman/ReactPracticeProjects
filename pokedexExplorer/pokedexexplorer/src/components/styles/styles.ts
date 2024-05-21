// Style for the rainbow text effect
 export const rainbowTextStyle = {
        background: 'linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };


// Style for the indicator and the icons to have a rainbow gradient
export const tabsStyle = {
        '& .MuiTabs-indicator': {
            backgroundColor: 'transparent',
            backgroundImage: 'linear-gradient(to right, violet, indigo, blue, green, yellow, orange, red)'
        },
    };

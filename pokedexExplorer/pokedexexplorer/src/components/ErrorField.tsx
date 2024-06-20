import {Box, Card, CardContent, Typography} from "@mui/material";
import React from "react";

const ErrorField: React.FC = () => {
    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: 10 }}>
        <Card variant="outlined" sx={{ borderColor:'#E3350D', borderWidth: 2, borderRadius: 3  }}>
            <CardContent>
              <Typography variant="h5" color='#E3350D' gutterBottom>
                No Pokémon Matched Your Search!
              </Typography>
                <Typography component="div" sx={{color: '#919191', fontSize: 16}}>
                    <strong>Try these suggestions to find a Pokémon:</strong>
                    <ul>
                        <li><p>Make sure you are spelling the Pokémon's name correctly</p></li>
                        <li><p>Search for only one Pokémon at a time</p></li>
                    </ul>
                </Typography>
            </CardContent>
        </Card>
        </Box>
    );
};

export default ErrorField;
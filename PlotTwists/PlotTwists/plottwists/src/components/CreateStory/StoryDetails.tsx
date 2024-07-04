import {Controller, useForm} from "react-hook-form";
import React from "react";
import {
    Box, Button,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    Stack, Switch,
    TextField,
    Typography
} from "@mui/material";
import {genre} from "../../Utils/genre";

const StoryDetails: React.FC = ()=>{
        const { control, handleSubmit, watch } = useForm({
        defaultValues: {
            genre1: '',
            genre2: '',
            title: '',
            description: '',
            isMature: false
        }
    });

    const onSubmit = (data:any) => {
        console.log(data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <Stack direction="row" spacing={2}>
                <Controller
                    name="genre1"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel>Genre 1</InputLabel>
                            <Select {...field} label="Genre 1">
                                {genre.map((genre, index) =>
                                <MenuItem key={index} >{genre}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="genre2"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth>
                            <InputLabel>Genre 2 (optional)</InputLabel>
                            <Select {...field} label="Genre 2 (optional)">
                                {genre.map((genre, index) =>
                                <MenuItem key={index} >{genre}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    )}
                />
            </Stack>
            <Controller
                name="title"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="Title"
                        autoFocus
                    />
                )}
            />
            <Controller
                name="description"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        margin="normal"
                        fullWidth
                        label="Description"
                        multiline
                        rows={4}
                    />
                )}
            />
            <FormControlLabel
                control={
                    <Controller
                        name="isMature"
                        control={control}
                        render={({ field }) => (
                            <Switch {...field} checked={field.value} />
                        )}
                    />
                }
                label="Mature Content"
            />
        </Box>
    );
}
export default StoryDetails;
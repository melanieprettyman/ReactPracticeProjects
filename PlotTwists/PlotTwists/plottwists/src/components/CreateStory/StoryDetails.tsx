import { Controller, useForm } from "react-hook-form";
import React from "react";
import {
    Box,
    FormControl,
    FormControlLabel,
    MenuItem,
    Select,
    Stack,
    Switch,
    TextField,
    Typography,
} from "@mui/material";
import { genre } from "../../Utils/genre";

const StoryDetails: React.FC = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            genre1: '',
            genre2: '',
            title: '',
            description: '',
            isMature: false
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <Stack direction="row" spacing={4}>
                <Stack>
                    <Typography variant="h5" sx={{ mb: 2 }}>Genre 1</Typography>
                    <Controller
                        name="genre1"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth sx={{ width: 260, mb: 2 }}>
                                <Select {...field}>
                                    {genre.map((genre, index) =>
                                        <MenuItem key={index}>{genre}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        )}
                    />
                </Stack>
                <Stack>
                    <Typography variant="h5" sx={{ mb: 2 }}>Genre 2 (Optional)</Typography>
                    <Controller
                        name="genre2"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth sx={{ width: 260, mb: 2 }}>
                                <Select {...field}>
                                    {genre.map((genre, index) =>
                                        <MenuItem key={index}>{genre}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                        )}
                    />
                </Stack>
            </Stack>
            <Stack sx={{ mb: 2 , width: 816 }}>
                <Typography variant="h5">Title</Typography>
                <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            margin="normal"
                            fullWidth
                            autoFocus
                        />
                    )}
                />
            </Stack>
            <Stack sx={{ mb: 2 , width: 816 }}>
                <Typography variant="h5">Description</Typography>
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            margin="normal"
                            fullWidth
                            multiline
                            rows={12}
                        />
                    )}
                />
            </Stack>
            <FormControlLabel
                sx={{ mb: 2 }}
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

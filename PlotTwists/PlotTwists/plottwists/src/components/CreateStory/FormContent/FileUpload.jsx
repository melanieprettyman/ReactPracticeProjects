import React, {useState} from 'react';
import {useDropzone} from 'react-dropzone';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import {hover} from "@testing-library/user-event/dist/hover";
import {Stack, Typography} from "@mui/material";

const FileUpload = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/jpeg, image/png, image/jpg',
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            if (file) {
                setUploadedImage(Object.assign(file, {
                    preview: URL.createObjectURL(file)
                }));
            }
        }
    });

    // Custom styling for the dropzone
    const style = {
        width: '14vw', // Responsive width based on the viewport width
        maxWidth: '250px', // Maximum width
        height: 'auto', // Maximum height
        aspectRatio: '9 / 16', // Maintains the aspect ratio of 16:9
        backgroundColor: '#c9c8c8', // Grey background
        borderWidth: '4px',
        borderColor: hover ? '#5B2981ff' : '#adabab',
        borderStyle: 'solid',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom:'10px',
        color: '#5B2981ff',
        fontSize: '16px'
    };

    return (
        <Stack sx={{ width: '14vw'}}>
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                {uploadedImage ? (
                    <img src={uploadedImage.preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                ) : (
                    <Stack sx={{
                        padding:2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <InsertPhotoIcon sx={{ fontSize: 60 }}/>
                     <Typography textAlign={'center'} color="primary">
                         <b>Drag and drop file here, or click to browse.</b>
                     </Typography>
                    </Stack>
                )}
            </div>
           <Typography textAlign={'center'} color="primary">
                Image size must be 1080x1920. Image must be less than 700KB. Only JPG, JPEG, and PNG formats are
                allowed.
            </Typography>
        </Stack>
    );
};

export default FileUpload;

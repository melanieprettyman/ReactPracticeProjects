import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import {hover} from "@testing-library/user-event/dist/hover";

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      // Call your backend API endpoint to upload files
    }
  });

  // Custom styling for the dropzone
  const style = {
    width: '10vw', // Responsive width based on the viewport width
    maxWidth: '1920px', // Maximum width
    maxHeight: '1080px', // Maximum height
    aspectRatio: '16 / 9', // Maintains the aspect ratio of 16:9
    backgroundColor: '#c9c8c8', // Grey background
    padding: '20px',
    borderWidth: '4px',
    borderColor: hover ? '#5B2981ff' : '#adabab',
    borderStyle: 'solid',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '20px auto', // Centering the box
    color: '#5B2981ff',
    fontSize: '16px'
  };

  return (
    <div {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <InsertPhotoIcon sx={{fontSize:60}}/>
      <p><b>Drag and drop files here, or click to browse.</b></p>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;

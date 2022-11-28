import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import {Input} from 'semantic-ui-react'
import FileBase64 from 'react-file-base64';


export default function Upload() {
    const [item, setItem] = useState('');
    const [fileInputState, setFileInputState] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [previewSource, setPreviewSource] = useState();
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    };
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!previewSource) return;
        uploadImage(previewSource);
    };

    const uploadImage = async (base64EncodedImage) => {
        console.log(base64EncodedImage);
        try {
            await fetch('/upload', {
                method: 'POST',
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { 'Content-type': 'application/json' },
            });
        } catch (err) {
            console.error(err);
        }
    }





    return (
        <form onSubmit={handleSubmitFile} >
        <div style={{ padding: 5 }} >
            <div>

            <label className="uploadLabel">Upload a file
                <input type="file" name="image" size="60" onChange={handleFileInputChange} 
                value={fileInputState} className="ui inputfile" />&nbsp;
                <i className="ui upload icon"></i>
                <FileBase64
                    multiple={ true }
                    onDone={({base64})=> setItem ({ ...item, image: base64 })} />
            </label> 
                </div>
                <div><Button variant="outline-success" size="sm" type="submit">Upload</Button></div>
                
                {previewSource && (
                    <img src={previewSource} alt="chosen" style={{ width: '100px' }} />
                )}
                
        </div>
        </form>
    )
}

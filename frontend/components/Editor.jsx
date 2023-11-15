import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function Editor() {
    const [value, setValue] = useState(``);

    const modules = {
        toolbar: [
            [{ 'font': [] }], // Font family
            [{ 'size': ['small', false, 'large', 'huge'] }], // Custom font sizes
            [{ 'header': '1' }, { 'header': '2' }, ],
            ['bold', 'italic', 'underline', 'strike'], // Text formatting
            [{ 'color': [] }, { 'background': [] }], // Text color and background
            [{ 'list': 'ordered'}, { 'list': 'bullet' }], // Lists
            // ['blockquote', 'code-block'], // Quote and code block
            // [{ 'align': [] }, { 'direction': 'rtl' }], // Text alignment and direction
            ['link', 'image', 'video'], // Links, images, and videos
            // ['clean'], // Remove formatting
            // [{ 'script': 'sub'}, { 'script': 'super' }], // Superscript and subscript
            // [{ 'indent': '-1'}, { 'indent': '+1' }], // Indentation
            // ['formula'], // Formula (requires KaTex)
            // ['size'], // Font size
        ],
    };
    const editorStyle = {
        maxWidth: '900px', // Set your desired maximum width here
        width: '100%',
        margin: '0 auto', // Center the editor horizontally
    };

    return (
        <>
            <ReactQuill style={editorStyle}
                theme="snow" 
                value={value} 
                onChange={setValue} 
                modules={modules}
            />
        </>
    );
}

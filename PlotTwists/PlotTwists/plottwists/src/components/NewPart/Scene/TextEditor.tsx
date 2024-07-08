import React, {useEffect, useRef, useState} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Ensure styles are imported

const TextEditor: React.FC = () => {
    const editorContainerRef = useRef<HTMLDivElement>(null);
    const [quill, setQuill] = useState<Quill | null>(null);

    useEffect(() => {
            if (editorContainerRef.current) {
                editorContainerRef.current.innerHTML = ''; // Clears the container to prevent duplicate toolbar

                const newQuill = new Quill(editorContainerRef.current, {
                    theme: 'snow',
                    modules: {
                        toolbar: [
                            [{header: [1, 2, false]}],
                            ['bold', 'italic', 'underline'],
                            [{list: 'ordered'}, {list: 'bullet'}],
                        ]
                    },
                    placeholder: 'Compose a scene...',
                });
                setQuill(newQuill);

                return () => {
                    newQuill.off('text-change');
                    // @ts-ignore
                    editorContainerRef.current.innerHTML = ''; // Clear the inner HTML on cleanup
                    setQuill(null);
                };
            }
        },
        []); // No dependencies to ensure this runs only once

    const html = quill?.getSemanticHTML(); //Get the HTML representation of the editor contents


    return (
        <div className="text-editor">
            <div ref={editorContainerRef} style={{height: 200}}/>
        </div>
    );
};

export default TextEditor;

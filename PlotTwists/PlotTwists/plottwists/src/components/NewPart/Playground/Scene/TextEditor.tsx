import React, {useCallback, useEffect, useRef, useState} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {type} from "node:os"; // Ensure styles are imported

type Props = {
    setDescription: (html: string | undefined) => void
};
const TextEditor: React.FC<Props> = ({setDescription}) => {
    const handleFocus = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
    };

    const handleInput = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
    };


    // Add these props to your input elements in TextEditor
    <input onFocus={handleFocus} onInput={handleInput}/>

    const editorContainerRef = useRef<HTMLDivElement>(null);
    const [quill, setQuill] = useState<Quill | null>(null);

    useEffect(() => {
        // @ts-ignore
        let newQuill;
        if (editorContainerRef.current) {
            editorContainerRef.current.innerHTML = ''; // Clears the container to prevent duplicate toolbar

            newQuill = new Quill(editorContainerRef.current, {
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
        }

        return () => {
            // @ts-ignore
            if (newQuill) {
                newQuill.off('text-change');
            }
            // Protect against null reference if the component unmounts before setup
            if (editorContainerRef.current) {
                editorContainerRef.current.innerHTML = ''; // Clear the inner HTML on cleanup
            }
            setQuill(null);
        };
    }, []);

    const html = quill?.getSemanticHTML();

    useEffect(() => {
        setDescription(html);

    }, [html]);

    return (
        <div className="text-editor">
            <div ref={editorContainerRef} style={{height: 200}}/>
        </div>
    );
};

export default TextEditor;